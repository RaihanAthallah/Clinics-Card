import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const clinics = [
  {
    id: 1,
    img: "https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/kalideres-jakarta-barat-HCFP00000015.jpg",
    nama: "Puskesmas Kecamatan Kalideres",
    address: "Jl. Tj. Pura No.30, RW.5, Pegadungan, Kec. Kalideres, Kota Jakarta Barat,",
    service_time: "08.00 - 16.00 WIB",
    city: "Jakarta Barat",
    contact: "0877-2224-4894",
    province: "Jakarta",
    postalcode: "11830",
  },
  {
    id: 2,
    img: "https://databank-kpap.jakarta.go.id/uploads/organisasi/PKM_Cengkareng.jpg",
    nama: "Puskesmas Kecamatan Cengkareng",
    address: "Jl. Kamal Raya No.2 RT.09/RW. 07, Cengkareng Barat, Kecamatan Cengkareng,",
    service_time: "08.00 - 16.00 WIB",
    city: "Jakarta Barat",
    contact: "021 - 29038167",
    province: "Jakarta",
    postalcode: "11730",
  },
  {
    id: 3,
    img: "https://m.angsamerah.com/wp-content/uploads/2017/02/angsamerah-clinic_01.jpg",
    nama: "Klinik Angsa Merah",
    address: "Jl. Johar No.6A, RW.6, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat,",
    service_time: "08.00 - 16.00 WIB",
    city: "Jakarta Pusat",
    contact: "021 - 3160251",
    province: "Jakarta",
    postalcode: "10340",
  },
  {
    id: 4,
    img: "https://pkbidkijakarta.org/wp-content/uploads/2016/03/3-2.jpg",
    nama: "Klinik ProCare PKBI",
    address: "Jl. Pisangan Baru Selatan, RT.7/RW.9, Pisangan Baru, Kec. Matraman,",
    service_time: "08.00 - 16.00 WIB",
    city: "Jakarta Timur",
    contact: "0877-2224-4894",
    province: "Jakarta",
    postalcode: "13110",
  },
];

const Cliniclist = () => {
  return (
    <section className="cliniclist">
      {clinics.map((clinic) => {
        const { id, img, nama, address, service_time, city, contact, province, postal_code } = clinic;
        return <Clinics clinic={clinic}></Clinics>;
      })}
    </section>
  );
};

const Clinics = (items) => {
  const { id, img, nama, address, service_time, city, contact, province, postal_code } = items.clinic;
  return (
    <article className="clinic">
      <img src={img} alt="" />
      <div className="addition">
        <h1 className="font-bold">{nama}</h1>
        <h2>{address}</h2>
        <h2>{service_time}</h2>
        <div class="space-x-4 ">
          <div class="inline-flex ...">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div class="inline-flex ...">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div class="inline-flex ...">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

ReactDom.render(<Cliniclist />, document.getElementById("root"));
