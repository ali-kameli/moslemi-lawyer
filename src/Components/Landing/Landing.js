import React, { Fragment } from "react";
import "./Landing.css";
import Farzam from "../../assets/farzam.jpg";
import vakil from "../../assets/vakil.png";
import kart from "../../assets/01-Recovered.jpg";
// import page2 from "../../assets/02-Recovereduuv (1).jpg"
import page2 from "../../assets/page2.jpg";

const Landing = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="lnading-page">
          <img src={kart} alt="kart" />
        </div>
        <div className="cover col-12">
          <img src={vakil} alt="moslemi" className="logo-brand" />
        </div>
        <div className="row row-text-landing m-0">
          <div className="col-6 col-sm-5  text-landing">
            <h5>
              مجموعه حقوقی وکیل مسلمی زیر نظر فرزام مسلمی وکیل دادگستری اداره می
              شود و خود را موظف به ارائه مشاوره حقوقی تخصصی میداند و تلاش
              حداکثری خود را در جهت افزایش آگاهی حقوقی افراد جامعه به کار بسته و
              هر روز اقدام به ارائه مشاوره و راهکارهای قانونی به متقاضیان می
              نماید .همت گماشته ایم تا جامعه را با فرهنگ مراجعه به وکیل دادگستری
              آشنا کنیم و ازین رهگذر شاهد کاهش آسیب های اجتماعی،اقتصادی و فرهنگی
              باشیم
            </h5>
          </div>
        </div>
      </div>
      <div className="container container-page2" style={{ marginTop: "18rem" }}>
        <div className="row">
          <div className="col-12 col-md-7 mt-5 farzam-picture">
            <img src={Farzam} className="w-50 mb-4" alt="img" />
            <h1>Farzam Moslemi</h1>
            <h3>License number 31345 </h3>
          </div>
          <div className="col-12 col-md-5 w-100">
            <img src={page2} className="w-100 pl-4" alt="img" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
