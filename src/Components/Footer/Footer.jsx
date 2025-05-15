import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div id='contacts' className="contact-container">
            <h1 className="services-title-top">{t('footer.contacts')}</h1>
            <h1 className="contact-heading">{t('footer.getInTouch')}</h1>
            <div className="footer">
                <div className="contact-info">
                    <p><i className="ri-map-pin-line"></i> {t('footer.address')}</p>
                    <p><i className="ri-phone-line"></i> <a href="tel:+998955518888">+998 95 551 8888</a></p>
                    <p><i className="ri-phone-line"></i> <a href="tel:+998981110045">+998 98 111 00 45</a></p>
                    <p><i className="ri-mail-line"></i> <a href="mailto:sofamarva.chorsu@gmail.com">sofamarva.chorsu@gmail.com</a></p>
                    <p><i className="ri-user-line"></i> {t('footer.director')} Fathullayev Dilmurod Farhod O'g'li</p>
                    <p><i className="ri-time-line"></i> {t('footer.workingHours')} , 09:00 – 20:00</p>
                </div>

                <h2 className="social-title">{t('footer.socialTitle')}</h2>
                <div className="social-links">
                    <p>
                        <i className="ri-telegram-line"></i>
                        <a href="https://t.me/Sofa_Marva_Tour" target="_blank" rel="noopener noreferrer">sofamarva.chorsu</a>
                    </p>
                    <p>
                        <i className="ri-instagram-line"></i>
                        <a href="https://www.instagram.com/sofamarva.chorsu?igsh=bGwxN2p0Nms0dnAx" target="_blank" rel="noopener noreferrer">sofamarva.chorsu</a>
                    </p>
                    {/* <p>
                        <i className="ri-tiktok-line"></i>
                        <a href="https://www.tiktok.com/@sofamarva.chorsu" target="_blank" rel="noopener noreferrer">sofamarva.chorsu</a>
                    </p>
                    <p>
                        <i className="ri-facebook-box-line"></i>
                        <a href="https://facebook.com/sofamarva.chorsu" target="_blank" rel="noopener noreferrer">sofamarva.chorsu</a>
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
