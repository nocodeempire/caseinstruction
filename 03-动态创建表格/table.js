/**
 * Created by HUCC on 2017/5/10.
 */
function createTable(element, json) {
  //1. 创建table， 添加到body
  // 1.1 创建table
  var table = document.createElement("table");
  table.className = "my_table";
  // 1.2 添加到body
  element.appendChild(table);

  //2. 创建thead, 添加到table
  // 2.1 创建thead
  var thead = document.createElement("thead");
  // 2.2 添加到table
  table.appendChild(thead);

  //2.3  创建tr, 添加到thead里面
  //2.3.1 创建tr
  var tr = document.createElement("tr");
  //2.3.2 添加到thead中
  thead.appendChild(tr);

  //2.3.3 根据json.header.length创建th，添加到tr里面
  var header = json.header;
  for(var i = 0; i < header.length; i++) {
    //2.3.3.1 创建th
    var th = document.createElement("th");
    //2.3.3.2 添加到tr
    tr.appendChild(th);
    //2.3.3.3 设置th的内容
    th.innerHTML = header[i];
  }

  //添加操作
  var th = document.createElement("th");
  tr.appendChild(th);
  th.innerHTML = "操作";



  //3. 创建tbody，添加到table
  //3.1 创建tbody
  var tbody = document.createElement("tbody");
  //3.2 添加到table
  table.appendChild(tbody);

  //3.3 根据json.datas.length创建tr
  var datas = json.datas;
  for(var i = 0; i < datas.length; i++) {
    //3.3.1 创建tr
    var tr = document.createElement("tr");
    //3.3.2 添加到tbody
    tbody.appendChild(tr);

    //3.3.3 根据datas[i]进行创建td， 添加到tr
    for(var k in datas[i]){
      //3.3.3.1 创建td
      var td = document.createElement("td");
      //3.3.3.2 添加到tr
      tr.appendChild(td);
      //3.3.3.3 设置td的内容
      td.innerHTML = datas[i][k];
    }

    //创建td
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = "<a href='javascript:void(0);'>删除</a>";

    //给a注册点击事件
    td.children[0].onclick = function () {
      //让tbody删除tr
      tbody.removeChild(this.parentNode.parentNode);

    }

  }

  return table;
}
