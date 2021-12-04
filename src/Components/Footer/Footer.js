import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>آدرس ایمیل</h3>
              <a href="mailto:pharzzam@gmail.com">pharzzam@gmail.com</a>
            </span>
            <i className="fa fa-envelope fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>پیام</h3>
              <div style={{ display: "grid" }}>
                <a href="https://www.instagram.com/moslemi_farzam">
                  moslemi_farzam
                  <i className="fa fa-instagram icon-footer"></i>
                </a>
                <a href="tel:+989124082208">
                  0912 408 2208
                  <i className="fa fa-whatsapp icon-footer"></i>
                </a>
              </div>
            </span>
            <i className="fa fa-comment fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>تلفن</h3>
              <a href="tel:+989124082208">0912 408 2208</a>
              <br />
              <a href="tel:+9802122949797">021 2294 9797</a>
            </span>
            <i className="fa fa-phone fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>آدرس</h3>
              <p>تهران - پاسداران- مکران شمالی- کوچه گل-پلاک 7-واحد 1</p>
            </span>
            <i className="fa fa-map-marker fa-footer"></i>
          </div>
        </div>
      </div>
      <div className="container-fluid container-footer py-5">
        <div className="row pt-5 row-footer">
          <div className="col-12 col-md-2 "> </div>
          <div className="col-12 col-md-4 footer-text">
            <h3>دفتر وکالت مسلمی</h3>
            <p>
              دفتر حقوقی مسلمی ، متشکل از وکلای پایه یک دادگستری و دکترین حقوقی
              ، آماده ارائه مشاوره حقوقی ، قبول و پیگیری پرونده در زمینه های
              مختلف می باشد. پیگیری انواع پرونده های حقوقی ، کیفری ، ملکی ،
              خانواده و امور حسبی ، به صورت تخصصی
            </p>
          </div>
          <div className="col-12 col-md-3 service-footer">
            <h3 className="  service-moshavere"> خدمات مشاوره</h3>
            <a href="tel:+989124082208">مشاوره تلفنی</a>
            <a href="tel:+989124082208">مشاوره کیفری</a>
            <a href="tel:+989124082208">مشاوره حقوقی</a>
          </div>
          <div className="col-12 col-md-3 service-footer mt-4">
            <p></p>
            <a href="tel:+989124082208">مشاوره خانواده</a>
            <a href="tel:+989124082208">مشاوره مالی</a>
            <a href="https://www.instagram.com/moslemi_farzam">مشاوره آنلاین</a>
          </div>

          <div
            className="col-12"
            style={{
              color: "#e0b33e",
              marginTop: "2rem",
              textAlign: "center ",
            }}
          >
            © کلیه حقوق مادی و معنوی این وب‌سایت متعلق به
            <a
              href="https://www.instagram.com/__aaalli_"
              style={{ color: "rgb(255 177 0)" }}
            >
              {" "}
              علی کاملی{" "}
            </a>
            می باشد.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
