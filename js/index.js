$(function () {
  initDetail();
  initEvent();
});
function initDetail() {
  loadTableRule3(dataArr)
  loadTableRule4(dataArr)
}
function initEvent() {
  $(".container .nav-item").on("click", function () {
    $(".rule").hide()
    $(`.${$(this).attr("attrrule")}`).show()
  });
}

var dataArr = [
  {
    id: 1,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  },
  {
    id: 2,
    name: "张三",
    department: "安顺中支车险部销售团队",
    base: "2000",
    coefficient: "1.1规则",
    salary: '4000',
    Attendance: "-100",
    Deduction: "-54.2",
    total: "-"
  }
]
function loadTableRule3(data) {
  $('#fileTable').bootstrapTable({
    data: data,
    columns: [{
      field: 'name',
      title: '姓名'
    }, {
      field: 'department',
      title: '部门'
    }, {
      field: 'base',
      title: '月绩效基数'
    }, {
      field: 'coefficient',
      title: '月绩效系数',
      formatter: function (value, row, index) {
        console.log("value", value)
        var button = value;
        var result = "";
        result += "<button type='button' class='btn btn-primary'>" + button + "</button>";
        return result;
      }
    }, {
      field: 'salary',
      title: '工资收入'
    }, {
      field: 'Attendance',
      title: '考勤扣除'
    }, {
      field: 'Deduction',
      title: '扣税'
    }, {
      field: 'total',
      title: '合计'
    }],
  });
}

function loadTableRule4(data) {
  $('#fileTable4').bootstrapTable({
    data: data,
    columns: [{
      field: 'name',
      title: '姓名'
    }, {
      field: 'department',
      title: '部门'
    }, {
      field: 'base',
      title: '月绩效基数'
    }, {
      field: 'coefficient',
      title: '月绩效系数',
      formatter: function (value, row, index) {
        console.log("value", value)
        var button = value;
        var result = "";
        result += "<button type='button' class='btn btn-primary'>" + button + "</button>";
        return result;
      }
    }, {
      field: 'salary',
      title: '工资收入'
    }, {
      field: 'Attendance',
      title: '考勤扣除'
    }, {
      field: 'Deduction',
      title: '扣税'
    }, {
      field: 'total',
      title: '合计'
    }],
  });
}
