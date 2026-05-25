'use strict';

// ── Student Data ──────────────────────────────────────────
const students = [
  { roll: 1001, name: "AYUSH PRAKASH DAYAL", gender: "Male", stream: "Science", category: "EWS", perc10: 88.40, perc12: 91.20 },
  { roll: 1002, name: "Priya Anjali Shinde", gender: "Female", stream: "Science", category: "OBC", perc10: 82.60, perc12: 87.80 },
  { roll: 1003, name: "ROHIT MAHENDRA JADHAV", gender: "Male", stream: "Commerce", category: "SC", perc10: 74.20, perc12: 78.60 },
  { roll: 1004, name: "Sneha Vaishnavi Deshmukh", gender: "Female", stream: "Arts", category: "ST", perc10: 69.40, perc12: 73.20 },
  { roll: 1005, name: "VIVEK ANAND KADAM", gender: "Male", stream: "Science", category: "EWS", perc10: 91.00, perc12: 94.40 },
  { roll: 1006, name: "Pooja Rani Gaikwad", gender: "Female", stream: "Commerce", category: "General", perc10: 76.80, perc12: 81.20 },
  { roll: 1007, name: "AQSA ZAM ZAM MIRZA JOHAR BAIG", gender: "Female", stream: "Science", category: "General", perc10: 65.00, perc12: 68.60 },
  { roll: 1008, name: "Kavita Meera Mane", gender: "Female", stream: "Science", category: "OBC", perc10: 85.20, perc12: 89.00 },
  { roll: 1009, name: "SIDDHARTH VINAY MORE", gender: "Male", stream: "Commerce", category: "General", perc10: 79.60, perc12: 83.40 },
  { roll: 1010, name: "Ananya Priyal Kulkarni", gender: "Female", stream: "Science", category: "EWS", perc10: 93.40, perc12: 96.20 },

  { roll: 1011, name: "NIKHIL SURESH SAWANT", gender: "Male", stream: "Science", category: "SC", perc10: 71.80, perc12: 75.40 },
  { roll: 1012, name: "Rutuja Aarti Kale", gender: "Female", stream: "Arts", category: "General", perc10: 68.20, perc12: 71.80 },
  { roll: 1013, name: "PRATHAMESH AJINKYA DESHPANDE", gender: "Male", stream: "Commerce", category: "OBC", perc10: 80.40, perc12: 84.60 },
  { roll: 1014, name: "Gauri Nandini Pawar", gender: "Female", stream: "Science", category: "ST", perc10: 77.60, perc12: 82.20 },
  { roll: 1015, name: "YASH PRATAP NAIKWADI", gender: "Male", stream: "Arts", category: "NT", perc10: 63.80, perc12: 67.40 },
  { roll: 1016, name: "Aishwarya Snehal Thombare", gender: "Female", stream: "Commerce", category: "General", perc10: 83.00, perc12: 87.00 },
  { roll: 1017, name: "OMKAR RAGHAV SALUNKHE", gender: "Male", stream: "Science", category: "EWS", perc10: 89.60, perc12: 92.80 },
  { roll: 1018, name: "Divya Shreya Mohite", gender: "Female", stream: "Science", category: "OBC", perc10: 86.40, perc12: 90.00 },
  { roll: 1019, name: "TEJAS VIKRAM YADAV", gender: "Male", stream: "Commerce", category: "SC", perc10: 72.00, perc12: 76.20 },
  { roll: 1020, name: "Manasi Pritika Londhe", gender: "Female", stream: "Arts", category: "General", perc10: 67.40, perc12: 70.60 },

  { roll: 1021, name: "Harsh Aditya Shinde", gender: "Male", stream: "Science", category: "General", perc10: 87.20, perc12: 90.40 },
  { roll: 1022, name: "SHRADDHA KOMAL PATIL", gender: "Female", stream: "Commerce", category: "NT", perc10: 75.80, perc12: 79.60 },
  { roll: 1023, name: "Kiran Dattatray Jagtap", gender: "Male", stream: "Arts", category: "OBC", perc10: 61.60, perc12: 65.20 },
  { roll: 1024, name: "NISHA BHAGYASHREE KAMBLE", gender: "Female", stream: "Science", category: "SC", perc10: 84.00, perc12: 88.40 },
  { roll: 1025, name: "Shubham Raj Dhavale", gender: "Male", stream: "Commerce", category: "EWS", perc10: 78.20, perc12: 82.00 },
  { roll: 1026, name: "ARCHANA SWARA WAGHMARE", gender: "Female", stream: "Science", category: "ST", perc10: 90.00, perc12: 93.60 },
  { roll: 1027, name: "Akash Ravindra Tupe", gender: "Male", stream: "Arts", category: "General", perc10: 64.60, perc12: 68.00 },
  { roll: 1028, name: "PALLAVI NEHA GORE", gender: "Female", stream: "Science", category: "OBC", perc10: 81.40, perc12: 85.60 },
  { roll: 1029, name: "Pratik Shashank Bhor", gender: "Male", stream: "Commerce", category: "NT", perc10: 73.60, perc12: 77.40 },
  { roll: 1030, name: "VAISHNAVI RUTUJA GUNDE", gender: "Female", stream: "Arts", category: "General", perc10: 70.20, perc12: 74.00 },

  { roll: 1031, name: "Sourabh Kunal Chavan", gender: "Male", stream: "Science", category: "SC", perc10: 92.00, perc12: 95.00 },
  { roll: 1032, name: "KETKI VAIDEHI SURYAWANSHI", gender: "Female", stream: "Commerce", category: "EWS", perc10: 79.00, perc12: 83.20 },
  { roll: 1033, name: "Rishikesh Abhay Bhave", gender: "Male", stream: "Science", category: "General", perc10: 88.80, perc12: 91.60 },
  { roll: 1034, name: "TEJAL ANUSHKA NAGARE", gender: "Female", stream: "Arts", category: "OBC", perc10: 66.60, perc12: 70.00 },
  { roll: 1035, name: "Aditya Samar Bhabad", gender: "Male", stream: "Commerce", category: "ST", perc10: 77.00, perc12: 81.00 },
  { roll: 1036, name: "MONIKA ISHITA BANKAR", gender: "Female", stream: "Science", category: "NT", perc10: 85.60, perc12: 89.40 },
  { roll: 1037, name: "Ganesh Pravin Pol", gender: "Male", stream: "Arts", category: "General", perc10: 60.40, perc12: 64.80 },
  { roll: 1038, name: "SONALI KAVYA FULPAGARE", gender: "Female", stream: "Science", category: "SC", perc10: 83.60, perc12: 87.40 },
  { roll: 1039, name: "Abhijit Nitin Mulik", gender: "Male", stream: "Commerce", category: "EWS", perc10: 76.40, perc12: 80.20 },
  { roll: 1040, name: "RADHA POONAM MAGAR", gender: "Female", stream: "Arts", category: "General", perc10: 71.00, perc12: 75.00 },

  { roll: 1041, name: "ATHARVA RAHUL PATIL", gender: "Male", stream: "Science", category: "OBC", perc10: 86.20, perc12: 89.60 },
  { roll: 1042, name: "Neha Vaibhavi Shirole", gender: "Female", stream: "Commerce", category: "General", perc10: 80.20, perc12: 84.40 },
  { roll: 1043, name: "SAHIL NITIN PAWAR", gender: "Male", stream: "Arts", category: "NT", perc10: 67.80, perc12: 71.20 },
  { roll: 1044, name: "Prajakta Sneha Chorge", gender: "Female", stream: "Science", category: "SC", perc10: 88.00, perc12: 91.40 },
  { roll: 1045, name: "ROHAN MAHESH KHADE", gender: "Male", stream: "Commerce", category: "EWS", perc10: 75.00, perc12: 79.20 },
  { roll: 1046, name: "Mrunal Pooja More", gender: "Female", stream: "Arts", category: "General", perc10: 69.20, perc12: 72.80 },
  { roll: 1047, name: "KARAN SANDEEP GAIKWAD", gender: "Male", stream: "Science", category: "OBC", perc10: 90.40, perc12: 93.80 },
  { roll: 1048, name: "Riya Aishwarya Patne", gender: "Female", stream: "Science", category: "ST", perc10: 84.60, perc12: 88.80 },
  { roll: 1049, name: "ADARSH VIVEK JOSHI", gender: "Male", stream: "Commerce", category: "General", perc10: 78.40, perc12: 82.60 },
  { roll: 1050, name: "Komal Shreya Pathare", gender: "Female", stream: "Arts", category: "SC", perc10: 70.60, perc12: 74.20 },

  { roll: 1051, name: "PARTH RAVINDRA KULKARNI", gender: "Male", stream: "Science", category: "EWS", perc10: 91.20, perc12: 94.00 },
  { roll: 1052, name: "Ankita Rutuja Wagh", gender: "Female", stream: "Commerce", category: "OBC", perc10: 79.80, perc12: 83.60 },
  { roll: 1053, name: "SUMIT PRAVIN THORAT", gender: "Male", stream: "Arts", category: "NT", perc10: 66.20, perc12: 69.80 },
  { roll: 1054, name: "Pallavi Neelam Jadhav", gender: "Female", stream: "Science", category: "General", perc10: 87.60, perc12: 90.80 },
  { roll: 1055, name: "RAHUL DATTATRAY SHINDE", gender: "Male", stream: "Commerce", category: "SC", perc10: 73.20, perc12: 77.00 },
  { roll: 1056, name: "Sakshi Aarti Kale", gender: "Female", stream: "Arts", category: "General", perc10: 68.80, perc12: 72.00 },
  { roll: 1057, name: "ABHISHEK VINOD CHAVAN", gender: "Male", stream: "Science", category: "ST", perc10: 89.40, perc12: 92.20 },
  { roll: 1058, name: "Rupali Bhavna Magar", gender: "Female", stream: "Commerce", category: "OBC", perc10: 81.60, perc12: 85.20 },
  { roll: 1059, name: "NILESH SANTOSH MANE", gender: "Male", stream: "Arts", category: "General", perc10: 65.40, perc12: 68.40 },
  { roll: 1060, name: "Tanvi Komal Desai", gender: "Female", stream: "Science", category: "EWS", perc10: 92.40, perc12: 95.40 },

  { roll: 1061, name: "SAGAR MAHENDRA JAGTAP", gender: "Male", stream: "Commerce", category: "SC", perc10: 77.80, perc12: 81.60 },
  { roll: 1062, name: "Mansi Priyanka Patil", gender: "Female", stream: "Arts", category: "NT", perc10: 71.40, perc12: 74.80 },
  { roll: 1063, name: "HARSHAL NITIN SHAH", gender: "Male", stream: "Science", category: "General", perc10: 88.20, perc12: 91.00 },
  { roll: 1064, name: "Vaidehi Snehal Pawar", gender: "Female", stream: "Commerce", category: "OBC", perc10: 80.00, perc12: 84.00 },
  { roll: 1065, name: "TUSHAR AJAY BORADE", gender: "Male", stream: "Arts", category: "ST", perc10: 67.00, perc12: 70.40 },
  { roll: 1066, name: "Rashmi Anagha Joshi", gender: "Female", stream: "Science", category: "General", perc10: 90.80, perc12: 93.40 },
  { roll: 1067, name: "VISHAL PRASHANT GORE", gender: "Male", stream: "Commerce", category: "EWS", perc10: 78.80, perc12: 82.80 },
  { roll: 1068, name: "Aditi Rani Kshirsagar", gender: "Female", stream: "Arts", category: "SC", perc10: 69.60, perc12: 73.00 },
  { roll: 1069, name: "AKSHAY RAMESH LONDHE", gender: "Male", stream: "Science", category: "OBC", perc10: 86.80, perc12: 89.80 },
  { roll: 1070, name: "Shweta Poonam Bhosale", gender: "Female", stream: "Commerce", category: "General", perc10: 82.20, perc12: 86.00 },

  { roll: 1071, name: "RUTURAJ VINAYAK PAWAR", gender: "Male", stream: "Arts", category: "NT", perc10: 64.80, perc12: 68.20 },
  { roll: 1072, name: "Kalyani Sneha Patil", gender: "Female", stream: "Science", category: "ST", perc10: 91.60, perc12: 94.80 },
  { roll: 1073, name: "SHREYAS AJINKYA MORE", gender: "Male", stream: "Commerce", category: "General", perc10: 76.60, perc12: 80.40 },
  { roll: 1074, name: "Pooja Vaidehi Chavan", gender: "Female", stream: "Arts", category: "SC", perc10: 70.80, perc12: 74.60 },
  { roll: 1075, name: "ARYAN SANJAY SHINDE", gender: "Male", stream: "Science", category: "OBC", perc10: 89.00, perc12: 92.00 },
  { roll: 1076, name: "Nehal Priyanka Mane", gender: "Female", stream: "Commerce", category: "EWS", perc10: 81.00, perc12: 84.80 },
  { roll: 1077, name: "PRANAV RAHUL JOSHI", gender: "Male", stream: "Arts", category: "General", perc10: 66.80, perc12: 70.20 },
  { roll: 1078, name: "Ishita Rutuja Magar", gender: "Female", stream: "Science", category: "SC", perc10: 87.40, perc12: 90.20 },
  { roll: 1079, name: "KUNAL ABHAY DESHMUKH", gender: "Male", stream: "Commerce", category: "NT", perc10: 74.80, perc12: 78.40 },
  { roll: 1080, name: "Riya Komal Jagtap", gender: "Female", stream: "Arts", category: "General", perc10: 72.20, perc12: 75.60 }
];

// ── Grade lookup ──────────────────────────────────────────
function getGrade(p) {
  if (p >= 91) return { label: 'O',  cls: 'grade-O'  };
  if (p >= 81) return { label: 'A1', cls: 'grade-A1' };
  if (p >= 71) return { label: 'A2', cls: 'grade-A2' };
  if (p >= 61) return { label: 'B1', cls: 'grade-B1' };
  if (p >= 51) return { label: 'B2', cls: 'grade-B2' };
  return            { label: 'C',  cls: 'grade-C'  };
}

function getRemark(p) {
  if (p >= 91) return { text: 'Distinction', cls: 'remark-dist' };
  if (p >= 60) return { text: 'Pass', cls: 'remark-pass' };
  return              { text: 'Needs Improvement', cls: '' };
}

// ── State ─────────────────────────────────────────────────
let filteredStudents = [...students];

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  populateSummary();
  applyFilters();
  setTimeout(buildCharts, 200);
});

function populateSummary() {
  const total   = students.length;
  const males   = students.filter(s => s.gender === 'Male').length;
  const females = students.filter(s => s.gender === 'Female').length;
  const avg     = (students.reduce((a, s) => a + s.perc12, 0) / total).toFixed(2);

  document.getElementById('totalCount').textContent  = total;
  document.getElementById('maleCount').textContent   = males;
  document.getElementById('femaleCount').textContent = females;
  document.getElementById('avgPercent').textContent  = avg + '%';
}

// ── Filters ───────────────────────────────────────────────
function applyFilters() {
  const search   = document.getElementById('searchInput').value.toLowerCase().trim();
  const gender   = document.getElementById('genderFilter').value;
  const category = document.getElementById('categoryFilter').value;
  const stream   = document.getElementById('streamFilter').value;
  const sortBy   = document.getElementById('sortBy').value;

  filteredStudents = students.filter(s => {
    if (search   && !s.name.toLowerCase().includes(search)) return false;
    if (gender   && s.gender   !== gender)   return false;
    if (category && s.category !== category) return false;
    if (stream   && s.stream   !== stream)   return false;
    return true;
  });

  filteredStudents.sort((a, b) => {
    switch (sortBy) {
      case 'name':      return a.name.localeCompare(b.name);
      case '12th_desc': return b.perc12 - a.perc12;
      case '12th_asc':  return a.perc12 - b.perc12;
      default:          return a.roll - b.roll;
    }
  });

  renderTable();
  updateInfo();
}

function resetFilters() {
  document.getElementById('searchInput').value  = '';
  document.getElementById('genderFilter').value = '';
  document.getElementById('categoryFilter').value = '';
  document.getElementById('streamFilter').value = '';
  document.getElementById('sortBy').value       = 'roll';
  applyFilters();
}

// ── Render Table ──────────────────────────────────────────
function renderTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = filteredStudents.map((s, i) => {
    const grade  = getGrade(s.perc12);
    const remark = getRemark(s.perc12);
    return `
      <tr>
        <td>${i + 1}</td>
        <td>${s.roll}</td>
        <td><strong>${s.name}</strong></td>
        <td><span class="gen">${s.gender}</span></td>
        <td><span class="stream-badge">${s.stream}</span></td>
        <td><span class="cat cat-${s.category}">${s.category}</span></td>
        <td>${s.perc10.toFixed(2)}%</td>
        <td>${s.perc12.toFixed(2)}%</td>
        <td><span class="grade ${grade.cls}">${grade.label}</span></td>
        <td><span class="remark ${remark.cls}">${remark.text}</span></td>
      </tr>`;
  }).join('');
}

function updateInfo() {
  const n     = filteredStudents.length;
  const total = students.length;
  const info  = document.getElementById('tableInfo');
  const noRes = document.getElementById('noResults');
  const wrap  = document.querySelector('.table-wrapper');

  info.textContent = n === total
    ? `Displaying all ${total} student records`
    : `Displaying ${n} of ${total} records`;

  if (n === 0) {
    noRes.classList.remove('hidden');
    wrap.classList.add('hidden');
  } else {
    noRes.classList.add('hidden');
    wrap.classList.remove('hidden');
  }
}

// ── Charts ────────────────────────────────────────────────
function buildCharts() {
  const total = students.length;

  // Category Chart
  const cats = ['General','OBC','SC','ST','NT','EWS'];
  document.getElementById('categoryChart').innerHTML = cats.map(c => {
    const n = students.filter(s => s.category === c).length;
    const w = Math.round((n / total) * 100);
    return chartRow(c, n, w);
  }).join('');

  // Stream Chart
  const streams = ['Science','Commerce','Arts'];
  document.getElementById('streamChart').innerHTML = streams.map(st => {
    const n = students.filter(s => s.stream === st).length;
    const w = Math.round((n / total) * 100);
    return chartRow(st, n, w);
  }).join('');

  // Performance bands
  const bands = [
    { label: 'O  (91+)',   min: 91, max: 100 },
    { label: 'A1 (81-90)', min: 81, max: 90  },
    { label: 'A2 (71-80)', min: 71, max: 80  },
    { label: 'B1 (61-70)', min: 61, max: 70  },
    { label: 'B2 (51-60)', min: 51, max: 60  },
    { label: 'C  (<51)',   min:  0, max: 50  },
  ];
  document.getElementById('perfChart').innerHTML = bands.map(b => {
    const n = students.filter(s => s.perc12 >= b.min && s.perc12 <= b.max).length;
    const w = Math.round((n / total) * 100);
    return chartRow(b.label, n, w);
  }).join('');

  // Animate bars after paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.bar-fill[data-w]').forEach(el => {
      setTimeout(() => { el.style.width = el.dataset.w + '%'; }, 80);
    });
  });
}

function chartRow(label, count, widthPct) {
  return `
    <div class="bar-item">
      <span class="bar-label">${label}</span>
      <div class="bar-track">
        <div class="bar-fill" data-w="${widthPct}" style="width:0%"></div>
      </div>
      <span class="bar-count">${count}</span>
    </div>`;
}
