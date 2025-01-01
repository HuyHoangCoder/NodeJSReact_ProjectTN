import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <section id="footer">
        <div class="footer">
          <div class="footer-row">
            <div class="footer-column">
              <h3>VỀ WATCHSTORE.VN</h3>
              <ul>
                <li><a href="#">Giới thiệu về WatchStore</a></li>
                <li><a href="#">Phản ánh - Khiếu nại</a></li>
                <li><a href="#">Chứng nhận đại lý</a></li>
                <li><a href="#">Tin tức công ty</a></li>
                <li><a href="#">Top list đồng hồ</a></li>
                <li><a href="#">Kiến thức đồng hồ</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>CHÍNH SÁCH CHUNG</h3>
              <ul>
                <li><a href="#">Điều khoản thanh toán</a></li>
                <li><a href="#">Chính sách bảo hành</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Chính sách vận chuyển</a></li>
                <li><a href="#">Chính sách đổi trả</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>CỬA HÀNG HÀ NỘI</h3>
              <ul>
                <li>97 Trần Đại Nghĩa, HBT, Hà Nội</li>
                <li>Mở cửa: 8h30 - 22h30 | <a href="#">chỉ đường</a></li>
                <li>58 Trần Đăng Ninh, Cầu Giấy, Hà Nội</li>
                <li>Mở cửa: 8h30 - 22h00 | <a href="#">chỉ đường</a></li>
              </ul>
              <h3>CỬA HÀNG TP.HCM</h3>
              <ul>
                <li>90 Lê Văn Sỹ, P11, Phú Nhuận, HCM</li>
                <li>Mở cửa: 8h30 - 22h00 | <a href="#">chỉ đường</a></li>
                <li>61 Quang Trung, P10, Gò Vấp, HCM</li>
                <li>Mở cửa: 8h30 - 22h00 | <a href="#">chỉ đường</a></li>
              </ul>
              <h3>CỬA HÀNG ĐÀ NẴNG</h3>
              <ul>
                <li>339 Lê Duẩn, Thanh Khê, Đà Nẵng</li>
                <li>Mở cửa: 8h30 - 22h00 | <a href="#">chỉ đường</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>LIÊN HỆ HỖ TRỢ</h3>
              <ul>
                <li>Hotline 1: 093 189 2222</li>
                <li>Hotline 2: 097 189 3333</li>
                <li>Hotline 3: 096 139 5555</li>
                <li>Email: watchstore.donghochat@gmail.com</li>
              </ul>
              <h3>THEO DÕI CHÚNG TÔI TẠI</h3>
              <div class="social-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>Bản quyền thuộc về nhóm The Four © 2024</p>
          </div>
        </div>
      </section>
      
    );
}

export default Footer;