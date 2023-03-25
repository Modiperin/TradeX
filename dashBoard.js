// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["TCS", "ADANI", "LICHSF", "ADANI WILMAR", "INFOSYS"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

var loggedUser=window.sessionStorage.getItem('1')
loggedUser=JSON.parse(loggedUser)
  console.log(loggedUser.name)
  document.getElementById('dashName').innerHTML=loggedUser.name+"'s Inventory"
document.getElementById('logout').addEventListener('click',()=>{
  window.sessionStorage.clear()
  window.location.href='mainPage.html'
})
document.getElementById('wishlist').addEventListener('click',()=>{
  var ulField = document.getElementById('ullist');
  ulField.innerHTML=""
  var list=window.localStorage.getItem('watchList')
  list=JSON.parse(list)
  for(var i=0;i<list.stockName.length;i++)
  {
    ulField.innerHTML = ulField.innerHTML + `<li>${list.stockName[i]}</li>`;
    // ulField.addEventListener('click', selectItem(list.stockName[i]));
    // ulField.addEventListener('click', ({target})=>{
    //   console.log(list.stockName[i])
    //   if (target.tagName === 'LI') {
    //     window.sessionStorage.setItem("stockname", target.textContent);
    //     window.location.href='stockStructure.html'
    //   }
    // });
  }
})
// function selectItem({target},item)
// {
//   if (target.tagName === 'LI') {
//     window.sessionStorage.setItem("stockname", item);
//     window.location.href='stockStructure.html'
//   }
// }