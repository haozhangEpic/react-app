import { Layout } from "antd";
const { Header } = Layout;

interface Porps {
  colorBgContainer: string;
}
const Header_ = (props: Porps) => {
  return (
    <Header style={{ background: props.colorBgContainer }}>头部的东西</Header>
  );
};
export default Header_;
