import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

        <h2>Fell free To Contact Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18487.76450158206!2d88.95353890833356!3d24.405977511642476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc11eb95b094a1%3A0xd361fd306fd1d62c!2z4Kas4Kao4Kas4KeH4Kay4KaY4Kaw4Ka_4Kef4Ka-IOCmrOCmvuCmh-CmquCmvuCmuA!5e0!3m2!1sbn!2sbd!4v1672593402300!5m2!1sbn!2sbd" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xwkjkkdw" method="POST" className="contact-inputs">
              <input type="text" name="username" placeholder="username" required autoComplete="off" />
              <input type="email" name="email" placeholder="email" required autoComplete="off"/>
              <textarea name="message" rows="10" cols="30" required autoComplete="off" placeholder="Enter Your Message"></textarea>
              <input type="submit" name="submit" value="send"/>
            </form>
            
          </div>
          
        </div>
  </Wrapper>;
};

export default Contact;
