document.addEventListener('DOMContentLoaded', function() {
  const propertyDetails = document.getElementById('property-details');
  const captchaText = document.getElementById('captchaText');

  // Data for properties
  const propertiesData = [
      {
          "property": "دمشق",
          "propertyType": "بناء ",
          "rentPrice": "ل.س 800000 الف  ليرة",
          
          "details": {
              "area": "150 متر مربع",
              "address": "شارع المزة",
              "description": "تفاصيل العقار ",
              "pho": ["images3.jpg", "images4.jpg", "images2.jpg"]
          }
      },
      {
          "property": "ريف دمشق",
          "propertyType": "شقة",
          "rentPrice": "ل.س 750000 الف ليرة",
          
          "details": {
              "area": "90 متر مربع",
              "address": "مدينة التل",
              "description": "تفاصيل العقار",
              "pho": ["images10.jpg", "images11.jpg", "images15.jpg"]
          }
      },
      {
          "property": "حمص",
          "propertyType": "شقة",
          "rentPrice": "ل.س 100000 الف ليرة",
          
          "details": {
              "area": "70 متر مربع",
              "address": "شارع الحضارة ",
              "description": "تفاصيل العقار",
              "pho": ["images13.jpg", "images20.jpg", "images21.jpg"]
          }
      },
      {
          "property": "طرطوس",
          "propertyType": "شقة",
          "rentPrice": "ل.س 400000 الف ليرة",
          
          "details": {
              "area": "125 متر مربع",
              "address": "شارع العريض",
              "description": "تفاصيل العقار",
              "pho": ["/images14.jpg", "images18.jpg", "images19.jpg"]
          }
      },
      {
          "property": "اللاذقية",
          "propertyType": "شقة",
          "rentPrice": "ل.س 800000 الف ليرة",
          
          "details": {
              "area": "250 متر مربع",
              "address": "شارع الثورة",
              "description": "تفاصيل العقار",
              "pho": ["images1.jpg", "images22.jpg", "images23.jpg"]
          }
      },
      {
          "property": "حماة",
          "propertyType": "شقة",
          "rentPrice": "ل.س 750000 الف ليرة",
          
          "details": {
              "area": "150 متر مربع",
              "address": "شارع النواعير",
              "description": "تفاصيل العقار",
              "pho": ["images26.jpg", "images17.jpg", "images24.jpg"]
          }
      },
      {
          "property": "حلب",
          "propertyType": "شقة",
          "rentPrice": "ل.س 600000 الف ليرة",
          
          "details": {
              "area": "200 متر مربع",
              "address": "جانب القلعة",
              "description": "تفاصيل العقار",
              "pho": ["images27.jpg", "images23.jpg", "images16.jpg"]
          }
      },
      {
          "property": "دير الذور",
          "propertyType": "شقة",
          "rentPrice": "ل.س 1000000 مليون ليرة",
         
          "details": {
              "area": "200 متر مربع",
              "address": "الميادين",
              "description": "تفاصيل العقار",
              "pho": ["images4.jpg", "images11.jpg", "images7.jpg"]
          }
      },
      {
          "property": "السويداء",
          "propertyType": "شقة",
          "rentPrice": "ل.س 650000 الف ليرة",
          
          "details": {
              "area": "300 متر مربع",
              "address": "جبل العرب",
              "description": "تفاصيل العقار",
              "pho": ["images28.jpg", "images18.jpg", "images8.jpg"]
          }
      },
      {
          "property": "درعا ",
          "propertyType": "شقة",
          "rentPrice": "ل.س 950000 الف ليرة",
        
          "details": {
              "area": "175 متر مربع",
              "address": "بصرى ",
              "description": "تفاصيل العقار",
              "pho": ["images5.jpg", "images23.jpg", "images3.jpg"]
          }
      }
  ];

  propertiesData.forEach((property, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${property.property}</td>
        <td>${property.propertyType}</td>
        <td>${property.rentPrice}</td>
        
        <td><button class="show-details-btn" data-index="${index}">إظهار التفاصيل</button></td>
        <td><label for="property-radio"> </label>
        <input type="radio" name="property-choice" class="property-radio" data-index="${index}"></td>
      `;
      propertyDetails.appendChild(row);

      const detailsRow = document.createElement('tr');
      detailsRow.classList.add('expanded-details');
      detailsRow.innerHTML = `
        <td colspan="10">
          <div class="details-content" id="details-content-${index}">
            <p><strong>المساحة:</strong> ${property.details.area}</p>
            <p><strong>العنوان:</strong> ${property.details.address}</p>
            <p><strong>الوصف:</strong> ${property.details.description}</p>
            <div class="images-container" id="images-container-${index}"></div>
          </div>
        </td>
      `;
      propertyDetails.appendChild(detailsRow);

      const imagesContainer = document.getElementById(`images-container-${index}`);
      property.details.pho.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        imagesContainer.appendChild(img);
      });
  });

  const showDetailsButtons = document.querySelectorAll('.show-details-btn');
  const expandedDetails = document.querySelectorAll('.expanded-details');

  showDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      expandedDetails.forEach((details, i) => {
        if (index === i) {
          details.classList.toggle('active');
        } else {
          details.classList.remove('active');
        }
      });
    });
  });

  // Captcha generation
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaText.textContent = captcha;
}

generateCaptcha();

// Button to regenerate captcha
document.querySelector('#formContainer button[onclick="generateCaptcha()"]').addEventListener('click', generateCaptcha);

const form = document.getElementById('userDataForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredCaptcha = document.getElementById('captcha').value;
    if (enteredCaptcha !== captchaText.textContent) {
        alert('رمز التحقق غير صحيح. حاول مرة أخرى.');
        generateCaptcha();
    } else {
      
        // إضافة رسالة التأكيد بعد إرسال النموذج بنجاح هنا
        const selectedPropertyIndex = document.querySelector('input[name="property-choice"]:checked').getAttribute('data-index');
        const selectedProperty = propertiesData[selectedPropertyIndex];
        const message = `تم إستئجار العقار التالي:
العقار: ${selectedProperty.property}
نوع العقار: ${selectedProperty.propertyType}
سعر الإيجار: ${selectedProperty.rentPrice}
مدة الإيجار: ${selectedProperty.rentDuration}
المساحة: ${selectedProperty.details.area}
العنوان: ${selectedProperty.details.address}
الوصف: ${selectedProperty.details.description}`;

        alert(message);

        form.reset();
        generateCaptcha();
    }
});

document.querySelector('.BU').addEventListener('click', () => {
    const selectedProperty = document.querySelector('input[name="property-choice"]:checked');
    if (selectedProperty) {
        document.getElementById('formContainer').style.display = 'block';
    } else {
        alert('يرجى اختيار عقار أولاً.');
    }
});

window.cancelForm = function() {
    document.getElementById('formContainer').style.display = 'none';
};
});

