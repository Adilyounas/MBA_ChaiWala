import React from 'react'

const Footer = () => {

    const FooterLinks = (elements) => {
        const allFooterLinks = document.querySelectorAll(".footerLink")
        //  console.log(allFooterLinks);

        switch (elements) {
            case 0: return allFooterLinks.forEach((item, index) => index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

            case 1: return allFooterLinks.forEach((item, index) => index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
            case 2: return allFooterLinks.forEach((item, index) => index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
            case 3: return allFooterLinks.forEach((item, index) => index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
            case 4: return allFooterLinks.forEach((item, index) => index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))
            case 5: return allFooterLinks.forEach((item, index) => index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2))

            default: return allFooterLinks.forEach((item) => (item.style.opacity = 1))
        }
    }

    const linksBackToNormal =()=>{
        const allFooterLinks = document.querySelectorAll(".footerLink")
        allFooterLinks.forEach((item) => (item.style.opacity = 1))
    }





    return (
        <>
            <footer>
                <h1 data-cursorpointer = {true}>Let's
                    <br />
                    #ConnectOnCutting?

                </h1>


                <aside onMouseLeave={linksBackToNormal}>
                    <a data-cursorpointerMini = {true} href="/" className="footerLink" onMouseOver={() => FooterLinks(0)}>Home</a>
                    <a data-cursorpointerMini = {true} href="/story" className="footerLink" onMouseOver={() => FooterLinks(1)}>Story</a>
                    <a data-cursorpointerMini = {true} href="/media" className="footerLink" onMouseOver={() => FooterLinks(2)}>Media</a>
                    <a data-cursorpointerMini = {true} href="/franchise" className="footerLink" onMouseOver={() => FooterLinks(3)}>Franchise</a>
                    <a data-cursorpointerMini = {true} href="/event" className="footerLink" onMouseOver={() => FooterLinks(4)}>Events</a>
                    <a data-cursorpointerMini = {true} href="/chaiwalacares" className="footerLink" onMouseOver={() => FooterLinks(5)}>Chai Wala Cares</a>

                </aside>

                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com ">info@mbachaiwala.com</a>
                    <a href="mailto: franchise@mbachaiwala.com ">Franchise@mbachaiwala.com</a>

                </div>

                <div>
                    <h5>Phone</h5>
                    <a href="tel: +91722905222 ">+91722905222</a>
                </div>

                <p data-cursorpointer = {true}>@ COPYRIGHT 2022 MBA CHAIWALA. MADE BY | ADIL YOUNAS </p>

            </footer>
            <div className="footer"></div>
        </>
    )
}

export default Footer