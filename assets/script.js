var now = moment().format('MMMM Do YYYY, h:mm:ss ');
$('#currentDay').text(now)

 // render the calendar on the page
function renderCalendar(today, calEvents) {
    let rowHr = moment(today).hour(9); 
    const calendar = $("div.container"); 
    calendar.empty(); 

    function hourTracker() {
        const checkHourInterval = setInterval(function () {
            if (moment().isAfter(hourRendered, "minute")) {
                initCalendar(); 
            }
        }, 60000);
    };
};

// Fungsi untuk menyimpan data ke Local Storage
function simpanData(key, value) {
  localStorage.setItem(key, value);
}

// Fungsi untuk mengambil data dari Local Storage
function ambilData(key) {
  return localStorage.getItem(key);
}

// Event listener untuk tombol simpan
document.querySelectorAll('.saveBtn').forEach(button => {
  button.addEventListener('click', function() {
    // Ambil ID textarea terkait
    const textareaId = this.previousElementSibling.id;
    // Ambil nilai textarea
    const textareaValue = document.getElementById(textareaId).value;
    // Simpan data ke Local Storage
    simpanData(textareaId, textareaValue);
    // Tampilkan pesan sukses (opsional)
    alert('Data berhasil disimpan!');
  });
});

// Load data dari Local Storage saat halaman dimuat
window.onload = function() {
  document.querySelectorAll('.textarea').forEach(textarea => {
    // Ambil data dari Local Storage dengan ID textarea
    const storedValue = ambilData(textarea.id);
    // Jika ada data tersimpan, isi textarea dengan data tersebut
    if (storedValue) {
      textarea.value = storedValue;
    }
  });
};