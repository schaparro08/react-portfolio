import React from 'react';



const Footer = () => {
    return (
        <footer id="contact-me" className="text-center text-white" style="background-color: #5E8B7E;">
         
            <div className="container pt-4">
              
              <section className="mb-4">
              
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://www.facebook.com/stephanie.chaparro.923/"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-facebook-f"></i
                ></a>
          
           
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="mailto: schaparro2021@gmail.com"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-google"></i
                ></a>
          
        
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://www.linkedin.com/in/stephanie-chaparro-roldan-b4a0251a6"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-linkedin"></i
                ></a>
 
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://github.com/schaparro08"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-github"></i
                ></a>
              </section>
        
            </div>
           
          
         
            <div className="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
             Created By: Stephanie Chaparro-Roldan
            </div>
        
          </footer>
      
    );
  };
  
  export default Footer;