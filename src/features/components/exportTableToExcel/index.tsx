import React from "react";

function Export() {
  const tableToExcel = () => {
    //要导出的json数据
    const jsonData: any = [
      {
        name: "路人甲",
        phone: "123456",
        email: "123@123456.com",
      },
      {
        name: "炮灰乙",
        phone: "123456",
        email: "123@123456.com",
      },
      {
        name: "土匪丙",
        phone: "123456",
        email: "123@123456.com",
      },
      {
        name: "流氓丁",
        phone: "123456",
        email: "123@123456.com",
      },
    ];
    //列标题
    let str = "<tr><td>姓名</td><td>电话</td><td>邮箱</td></tr>";
    //循环遍历，每行加入tr标签，每个单元格加td标签
    for (let i = 0; i < jsonData.length; i++) {
      str += "<tr>";
      for (let item in jsonData[i]) {
        //增加\t为了不让表格显示科学计数法或者其他格式
        str += `<td>${jsonData[i][item] + "\t"}</td>`;
      }
      str += "</tr>";
    }
    //Worksheet名
    let worksheet = "Sheet1";
    let uri = "data:application/vnd.ms-excel;base64,";

    //下载的表格模板数据
    let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:x="urn:schemas-microsoft-com:office:excel" 
            xmlns="http://www.w3.org/TR/REC-html40">
            <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
              <x:Name>${worksheet}</x:Name>
              <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
              </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
              </head><body><table>${str}</table></body></html>`;
    //下载模板
    window.location.href = uri + base64(template);
  };
  //输出base64编码
  const base64 = (s: string) => {
    return window.btoa(unescape(encodeURIComponent(s)));
  };
  return <div>Export</div>;
}

export default Export;
