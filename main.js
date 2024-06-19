function exercise1() {
    let a = prompt("Nhập số a: ");
    let b = prompt("Nhập số b: ");
  
    a = parseFloat(a);
    b = parseFloat(b);
  
    if (a > b) {
      alert("Số a lớn hơn số b");
    } else if (a < b) {
      alert("Số a nhỏ hơn số b");
    } else {
      alert("Hai số bằng nhau");
    }
  }
  function exercise2() {
    let n = prompt("Nhập một số để kiểm tra (n):");
    n = parseInt(n);
  
    if (n % 2 === 0) {
      alert("Số " + n + " là số chẵn.");
    } else {
      alert("Số " + n + " là số lẻ.");
    }
  }

function exercise3() {
    let m = prompt("Nhập số cần kiểm tra (m):");
    let n = prompt("Nhập số để kiểm tra chia hết (n):");
  
    m = parseInt(m);
    n = parseInt(n);
  
    if (m % n === 0) {
      alert("Số " + m + " chia hết cho " + n + ".");
    } else {
      alert("Số " + m + " không chia hết cho " + n + ".");
    }
}
  
  function exercise4() {
    let today = new Date();
    let day = today.getDay();
    let dayName;
  
    switch (day) {
      case 0:
        dayName = "Chủ nhật";
        break;
      case 1:
        dayName = "Thứ hai";
        break;
      case 2:
        dayName = "Thứ ba";
        break;
      case 3:
        dayName = "Thứ tư";
        break;
      case 4:
        dayName = "Thứ năm";
        break;
      case 5:
        dayName = "Thứ sáu";
        break;
      case 6:
        dayName = "Thứ bảy";
        break;
      default:
        dayName = "Không xác định";
    }
  
    alert("Hôm nay là: " + dayName);
}
  
  function exercise5() {
    let fruitCode = prompt("Nhập mã trái cây:");
    let fruitName;
  
    switch (fruitCode) {
      case "1":
        fruitName = "Táo";
        break;
      case "2":
        fruitName = "Chuối";
        break;
      case "3":
        fruitName = "Cam";
        break;
      case "4":
        fruitName = "Dưa hấu";
        break;
      case "5":
        fruitName = "Nho";
        break;
      default:
        fruitName = "Mã trái cây không hợp lệ";
    }
  
    alert("Tên trái cây: " + fruitName);
}

