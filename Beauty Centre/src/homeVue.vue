<template>
  <header id="header" class="fixed top-0 z-50 bg-white w-full">
    <div class="container mx-auto">
      <ul
        class="flex justify-center px-16 items-center md:fl text-[#085f63] text-xl transition-colors"
      >
        <li class="px-5 py-4 hover:bg-[#085f63] hover:text-black transition-all duration-300">
          <a href="#About" class="font-bold">ABOUT US</a>
        </li>
        <li class="px-5 py-4 hover:bg-[#085f63] hover:text-black transition-all duration-300">
          <a href="#Featured" class="font-bold">Featured Patients</a>
        </li>
        <li class="px-5">
          <img class="w-48 h-48" src="@/assets/images/vectorstock_49751952.png" alt="" />
        </li>
        <li class="px-5 py-4 hover:bg-[#085f63] hover:text-black transition-all duration-300">
          <a href="#GALLERY" class="font-bold">GALLERY</a>
        </li>
        <li class="px-5 py-4 hover:bg-[#085f63] hover:text-black transition-all duration-300">
          <a href="#offers" class="font-bold">OFFERS</a>
        </li>
        <li class="px-5 py-4 hover:bg-[#085f63] hover:text-black transition-all duration-300">
          <a href="#CONTACT" class="font-bold">CONTACT</a>
        </li>
      </ul>
    </div>
  </header>
  <div
    id="bar-icon"
    class="fixed top-0 right-0 p-4 md:hidden z-50 cursor-pointer"
    @click="toggleHeader"
  >
    <i class="fas fa-bars text-3xl text-[#085f63]"></i>
  </div>

  <div
    class="intro bg-[url('../src/assets/images/intro.jpg')] bg-cover h-[100vh] relative mt-[200px]"
  >
    <div class="container">
      <p
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#e8feff] text-5xl text-center z-10"
      >
        The Right Place To get a Smile you’ll Love Forever
      </p>
      <a
        href="#CONTACT"
        class="absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f1345d] text-white p-5 rounded-full z-10"
        >BOOK AN Online APPOINTMENT FOR FREE NOW!</a
      >
    </div>
  </div>
  <div class="about-us mt-[50px]" id="About">
    <div class="container mx-auto">
      <div class="text-center">
        <div class="log flex justify-center mb-10">
          <img src="../src/assets/images/logo.png" alt="" />
        </div>
        <h2 class="mb-10 text-[#085f63] text-3xl">Welcome to</h2>
        <h1 class="line text-6xl mb-[100px] text-[#494949] relative">Beauty Clinic</h1>
        <p class="w-[500px] mx-auto text-[#6e6e6e] text-xl leading-[1.5] mb-[100px]">
          At Bein Clinic, we’re dedicated to helping our patients feel their best both inside and
          out. We understand that feeling confident in your appearance is crucial to your
          well-being, which is why we offer solutions that will help you look and feel like a
          Hollywood star. Our goal is to make sure that you feel heard, supported, and cared for at
          all times. We believe that everyone deserves access to the best care, regardless of their
          budget, and we’re here to help make that a reality for you.
        </p>
      </div>
      <div class="box grid md:grid-cols-1 lg:grid-cols-2 bg-[#f7f7f7]">
        <div class="content z-10 text-center">
          <h2 class="mt-5 mb-10 text-[#085f63] text-3xl">The Clinic</h2>
          <h1 class="line text-6xl mb-[100px] text-[#494949] relative">Dentistry</h1>
          <p class="w-[500px] mx-auto text-[#6e6e6e] text-xl leading-[1.5] mb-[100px]">
            At our Dental section, our top priority is to help you achieve the smile of your dreams.
            We understand that a healthy and beautiful smile can significantly impact your
            self-confidence and overall well-being.
          </p>
        </div>
        <div class="imges z-10"><img src="../src/assets/images/smile.png" alt="" /></div>
      </div>
    </div>
  </div>
  <div class="Featured min-h-[100vh] bg-[#e8feff]" id="Featured">
    <div class="container mx-auto">
      <div class="introduction text-center">
        <h3 class="pt-[100px] mb-10 text-[#085f63] text-3xl">Featured</h3>
        <h1 class="line text-6xl mb-[100px] text-[#494949] relative">Satisfied Clients</h1>
        <p class="w-[500px] mx-auto text-[#6e6e6e] text-xl leading-[1.5] mb-[100px] pb-[100px]">
          We love seeing our patients’ smiles transform throughout their treatment and the amazing
          results that follow.
        </p>
      </div>
    </div>
    <div class="contain bg-[url('../src/assets/images/gradint.jpg')] bg-contain min-h-[100vh]">
      <div class="container mx-auto">
        <div class="pos grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 top-[-50px]">
          <div class="box bg-white">
            <div class="imges flex justify-center">
              <img class="h-[250px]" src="../src/assets/images/1.jpeg" alt="" />
            </div>
            <div class="content text-center">
              <h2 class="text-[#085f63] text-xl my-[50px]">Massa</h2>
              <h1 class="text-3xl mb-[50px] text-[#494949]">Root Canals / Zirconium</h1>
              <p class="text-[#6e6e6e] px-5 text-xl leading-[1.5]">
                24 zirconium crowns 3 root canals
              </p>
            </div>
          </div>
          <div class="box bg-white">
            <div class="imges flex justify-center">
              <img class="h-[250px]" src="../src/assets/images/2.jpeg" alt="" />
            </div>
            <div class="content text-center">
              <h2 class="text-[#085f63] text-xl my-[50px]">mohammd mousa</h2>
              <h1 class="text-3xl mb-[50px] text-[#494949]">Implants / Zirconium</h1>
              <p class="text-[#6e6e6e] px-5 text-xl leading-[2.5]">
                all upper jaw implants (7 implants) 28 zirconium crowns for both jaws 1 root canal
                in the lower jaw
              </p>
            </div>
          </div>
          <div class="box bg-white">
            <div class="imges flex justify-center">
              <img class="h-[250px]" src="../src/assets/images/3.jpeg" alt="" />
            </div>
            <div class="content text-center">
              <h2 class="text-[#085f63] text-xl my-[50px]">maen</h2>
              <h1 class="text-3xl mb-[50px] text-[#494949]">Zirconium Crowns</h1>
              <p class="text-[#6e6e6e] px-5 text-xl leading-[2.5]">
                24 zirconium crowns No implant needed 4 root canals.
              </p>
            </div>
          </div>
          <div class="box bg-white">
            <div class="imges flex justify-center">
              <img class="h-[250px]" src="../src/assets/images/4.jpeg" alt="" />
            </div>
            <div class="content text-center">
              <h2 class="text-[#085f63] text-xl my-[50px]">majd</h2>
              <h1 class="text-3xl mb-[50px] text-[#494949]">Full mouth implants</h1>
              <p class="text-[#6e6e6e] px-5 text-xl leading-[2.5]">
                14 implants) 28 Zirconium crowns E-max All treatments needed
              </p>
            </div>
          </div>
          <div class="box bg-white">
            <div class="imges flex justify-center">
              <img class="h-[250px]" src="../src/assets/images/5.jpg" alt="" />
            </div>
            <div class="content text-center">
              <h2 class="text-[#085f63] text-xl my-[50px]">Alex</h2>
              <h1 class="text-3xl mb-[50px] text-[#494949]">FUE</h1>
              <p class="text-[#6e6e6e] px-5 text-xl leading-[2.5]">
                FUE procedure with over 4000 grafts to restore headline again
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Services">
    <div class="container mx-auto">
      <div class="introduction text-center z-10">
        <h3 class="pt-[100px] mb-10 text-[#085f63] text-3xl">Our</h3>
        <h1 class="line text-6xl mb-[100px] text-[#494949] relative">Services</h1>
        <p class="w-[500px] mx-auto text-[#6e6e6e] text-xl leading-[1.5]">
          We pride ourselves on offering the highest quality medical services in the region, our
          patients come first, and we strive to provide them with the best care in the industry.
        </p>
      </div>
    </div>
    <div class="bg-[url('../src/assets/images/bg1.jpg')]">
      <div class="container mx-auto">
        <div
          class="content grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 z-10 pt-[100px] gap-5"
        >
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <h3 class="pt-[50px] text-[#085f63] text-3xl">Cheek fat removal</h3>
              <div class="img_box">
                <img src="../src/assets/images/serveone.jpg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Cheek Fat Removal This surgery helps in slimming the cheeks. Although a naturally
                  smooth and full face is considered youthful, you may feel that your face is fuller
                  than necessary. You can get rid of that through cheek fat removal surgery.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <h3 class="pt-[50px] text-[#085f63] text-3xl">Breast Augmentation</h3>
              <div class="img_box">
                <img src="../src/assets/images/servetow.jpeg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Breast augmentation This surgery increases the size of the breasts. Breast
                  augmentation, also known as breast enhancement, helps to increase the size of the
                  breasts.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <h3 class="pt-[50px] text-[#085f63] text-3xl">Tummy Tuck</h3>
              <div class="img_box">
                <img src="../src/assets/images/servefour.jpeg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Tummy Tuck This surgery gives you a flat tummy by removing excess fat and skin
                  along with tightening the abdominal muscles. This procedure is called a tummy tuck
                  or abdominoplasty, and it helps you get rid of excess skin and fat in the
                  abdominal area.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <h3 class="pt-[50px] text-[#085f63] text-3xl">Thigh lift</h3>
              <div class="img_box">
                <img src="../src/assets/images/servethree.jpeg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Thigh Lift This surgery gives you smoother skin and improves the shape of the
                  thighs and the lower part of the body. Thigh lift surgery, also known as removing
                  thigh sagging, is a minimally invasive surgery that helps tighten and enhance the
                  overall appearance of the thighs.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <h3 class="pt-[50px] text-[#085f63] text-3xl">Eyebrow lift</h3>
              <div class="img_box">
                <img src="../src/assets/images/servefive.jpg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Eyebrow lift This surgery significantly improves the appearance of your forehead,
                  eyebrows, and the area around your eyes. As people age, eyebrows begin to sag, and
                  due to this mechanism, the distance between the eyebrows and the eyelashes
                  decreases as the skin and soft tissues lose elasticity. The eyebrow lift, forehead
                  lift, or brow rejuvenation procedure helps you get rid of this issue.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="log flex justify-center">
              <img src="../src/assets/images/logo.png" alt="" />
            </div>
            <div class="introduction text-center">
              <div>
                <h3 class="pt-[50px] text-[#085f63] text-3xl">Fat transfer with nanotechnology</h3>
              </div>
              <div class="img_box">
                <img src="../src/assets/images/servesix.jpg" alt="" />
                <p class="bg-slate-400 mx-auto text-[#6e6e6e] text-xl leading-[2.5]">
                  Nanofat transfer This vital surgery rejuvenates your appearance using pure fat
                  particles taken from your body. Nanofat transfer, also known as fat grafting with
                  nanofat, is one of the latest methods to rejuvenate skin and face youthfully and
                  is the most widespread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="GALLERY bg-[#e8feff] pt-10" id="GALLERY">
    <div class="container mx-auto">
      <h1 class="line text-6xl mb-[100px] text-[#494949] text-center relative">
        Explore Your Possibilities
      </h1>
      <p class="w-[500px] mx-auto text-[#6e6e6e] text-center text-xl mb-10 leading-[1.5]">
        We pride ourselves on offering the highest quality medical services in the region, our
        patients come first, and we strive to provide them with the best care in the industry.
      </p>
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-1">
        <div class="imges flex justify-center overflow-hidden transition-transform">
          <img
            class="h-[200px] hover:scale-125 transition-transform duration-300"
            src="../src/assets/images/state1.jpg"
            alt=""
          />
        </div>
        <div class="imges flex justify-center overflow-hidden">
          <img
            class="h-[200px] hover:scale-125 transition-transform duration-300"
            src="../src/assets/images/state2.jpg"
            alt=""
          />
        </div>
        <div class="imges flex justify-center overflow-hidden">
          <img
            class="h-[200px] hover:scale-125 transition-transform duration-300"
            src="../src/assets/images/state3.jpg"
            alt=""
          />
        </div>
        <div class="imges flex justify-center overflow-hidden">
          <img
            class="h-[200px] hover:scale-125 transition-transform duration-300"
            src="../src/assets/images/state4.jpg"
            alt=""
          />
        </div>
        <div class="imges flex justify-center overflow-hidden">
          <img
            class="h-[200px] hover:scale-125 transition-transform duration-300"
            src="../src/assets/images/state5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="offers" id="offers">
    <div class="container mx-auto">
      <div class="introduction text-center z-10">
        <h3 class="pt-[100px] mb-10 text-[#085f63] text-3xl">Our</h3>
        <h1 class="line text-6xl mb-[100px] text-[#494949] relative">Offers</h1>
        <div class="flex bg-[#f1345d] items-center">
          <i class="fa-solid fa-tags text-5xl text-white p-5"></i>
          <p class="w-[100%] mx-auto text-white text-xl leading-[1.5] pt-3">
            We pride ourselves on offering the highest quality medical services in the region, our
            patients come first, and we strive to provide them with the best care in the industry.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="CONTACT py-20 bg-[url('../src/assets/images/bg1.jpg')]" id="CONTACT">
    <div class="container mx-auto">
      <h2 class="mb-10 text-[#085f63] text-3xl text-center">Treat Yourself</h2>
      <h1 class="line text-6xl text-center mb-[100px] text-[#494949] relative">Book Appointment</h1>
      <p class="w-[500px] mx-auto text-center text-[#6e6e6e] text-xl leading-[1.5] mb-[100px]">
        WE ARE HERE TO CONSULT YOU
      </p>

      <div class="service p-10 w-[100%] grid place-items-center">
        <div class="flex justify-center">
          <button @click="showAlert" class="bg-[#f1345d] text-white p-5 rounded-full w-[300px]">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="conect bg-[#085f63] mb-11">
    <div class="container mx-auto">
      <div class="introduction text-center z-10">
        <h3 class="pt-[100px] mb-10 text-[#494949] text-3xl">Let’s Work Together</h3>
        <h1 class="line text-6xl mb-[100px] text-white relative">Contact Us</h1>
        <p class="w-[500px] mx-auto text-[#6e6e6e] text-xl leading-[1.5]">
          if you have any questions or need help, you can reach us at this phone number
        </p>
      </div>
      <div class="text-center pt-10">
        <h1 class="line text-6xl mb-[100px] text-white relative w-[100%]">Call Us</h1>
        <p class="w-[500px] mx-auto text-white text-6xl leading-[1.5]">+963969257381</p>
      </div>
    </div>
    <div class="images pt-32">
      <img src="../src/assets/images/footer-curve.png" class="w-[100%]" alt="" />
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  data: function () {
    return {
      userProfile: null,
      appointments: [],
      services: []
    }
  },
  created() {
    this.fetchappointment()
    this.fetchservisces()
  },

  methods: {
    toggleHeader() {
      const header = document.getElementById('header')
      if (header.style.display === 'none' || header.style.display === '') {
        header.style.display = 'block'
      } else {
        header.style.display = 'none'
      }
    },

    showAlert() {
      Swal.fire({
        title: 'Login or Sign Up',
        html: `
      <input type="email" id="email" class="swal2-input" placeholder="Email" required>
      <input type="password" id="password" class="swal2-input" placeholder="Password" required>
      <div>
        <button id="login" class="swal2-styled" style="margin: 5px">Login</button>
        <button id="signup" class="swal2-styled" style="margin: 5px">Sign Up</button>
      </div>`,
        showConfirmButton: false,
        didRender: () => {
          const loginButton = document.getElementById('login')
          const signupButton = document.getElementById('signup')

          loginButton.addEventListener('click', () => {
            const email = document.getElementById('email').value.trim()
            const password = document.getElementById('password').value.trim()

            if (email && password) {
              this.handleLogin(email, password)
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill in all fields correctly.'
              }).then(() => {
                this.showAlert()
              })
            }
          })

          signupButton.addEventListener('click', () => {
            this.showSignUpForm()
          })
        }
      })
    },

    async showSignUpForm() {
      Swal.fire({
        title: 'Sign Up',
        html: `
      <input type="text" id="new-name" class="swal2-input" placeholder="Name" required>
      <input type="email" id="new-email" class="swal2-input" placeholder="Email" required>
      <input type="password" id="new-password" class="swal2-input" placeholder="Password" required>
      <button id="create-account" class="swal2-styled" style="margin: 5px">Create Account</button>`,
        showConfirmButton: false,
        didRender: async () => {
          const createAccountButton = document.getElementById('create-account')

          createAccountButton.addEventListener('click', async () => {
            const name = document.getElementById('new-name').value.trim()
            const email = document.getElementById('new-email').value.trim()
            const password = document.getElementById('new-password').value.trim()

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (name && email && password && emailPattern.test(email)) {
              console.log('Sign up with', name, email, password)

              const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password
                })
              })

              if (!response.ok) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Email Is Alredy Exist'
                }).then(() => {
                  this.showAlert()
                })
              }
              if (response.ok) {
                console.log(response)
                const data = await response.json()
                console.log(data)

                const userProfile = {
                  name: data.user.name,
                  email: data.user.email
                }
                this.showProfile(userProfile)
              }
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill in all fields correctly.'
              }).then(() => {
                this.showSignUpForm()
              })
            }
          })
        }
      })
    },

    async handleLogin(email, password) {
      console.log('Login with', email, password)

      const response = await fetch('http://localhost:8000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill in all fields correctly.'
        }).then(() => {
          this.showAlert()
        })
      }

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        localStorage.setItem('authToken', data.access_token)
        const userProfile = {
          name: data.user.name,
          email: data.user.email
        }

        this.showProfile(userProfile)
      }
    },
    async fetchappointment() {
      const token = localStorage.getItem('authToken')
      const response = await fetch('http://localhost:8000/api/user/user_appointments', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      })

      const data = await response.json()
      this.appointments = data
      console.log(data)
      console.log(this.appointments)
      if (!response.ok) {
        const errorResponse = await response.text()
        console.error('Network response was not ok:', errorResponse)
        throw new Error('Network response was not ok')
      }
    },
    async fetchservisces() {
      // const token = localStorage.getItem('authToken')
      const response = await fetch('http://localhost:8000/api/loginall/wepsite_services', {
        method: 'POST'
        // headers: { Authorization: `Bearer ${token}` }
      })

      const data = await response.json()
      this.services = data
      console.log(data)
      console.log(this.services)
      if (!response.ok) {
        const errorResponse = await response.text()
        console.error('Network response was not ok:', errorResponse)
        throw new Error('Network response was not ok')
      }
    },

    async reserve_appointment(date, servicename) {
      const token = localStorage.getItem('authToken')

      // try {
      const response = await fetch('http://localhost:8000/api/user/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          date: date,
          servicename: servicename
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        alert('تم إضافة الموعد بنجاح')
      } else {
        alert('فشل   ')
      }
      // }
      // catch (error) {
      //   console.error('Error:', error)
      //   alert('حدث خطأ ما')
      // }
    },

    showProfile(userProfile) {
      this.userProfile = userProfile
      const appointments = this.appointments.appointments
      console.log(userProfile)
      console.log(appointments)

      let appointmentsHtml = ''
      if (appointments.length > 0) {
        appointmentsHtml = `
      <h3 style="color: #007bff; font-size: 20px;"><i class="fas fa-calendar-alt"></i> Your Appointments</h3>
      <div class="appointment-container">
        ${appointments
          .map(
            (app) => `
              <div id="appointment-${app.id}" class="appointment-item" style="border: 1px solid #007bff; border-radius: 5px; padding: 10px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                <div class="appointment-details">
                  <p><i class="fas fa-calendar-day" style="color: #007bff;"></i> <strong style="color: #007bff; font-size: 16px;">Date:</strong> <span style="font-size: 16px;">${app.date}</span></p>
                  <p><i class="fas fa-briefcase" style="color: #007bff;"></i> <strong style="color: #007bff; font-size: 16px;">Service:</strong> <span style="font-size: 16px;">${app.servicename}</span></p>
                </div>
                <div class="appointment-actions">
                  <button class="swal2-styled accept-appointment" data-id="${app.id}" style="background-color: #28a745; color: white; border: none; padding: 5px 10px; border-radius: 3px; font-size: 14px;">
                    <i class="fas fa-check"></i> Accept
                  </button>
                  <button class="swal2-styled reject-appointment" data-id="${app.id}" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px; font-size: 14px;">
                    <i class="fas fa-times"></i> Reject
                  </button>
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    `
      }

      let bookServiceHtml = `
    <h3 style="color: #007bff; font-size: 20px;"><i class="fas fa-calendar-plus"></i> Book a New Appointment</h3>
    <div class="appointment-container">
      <input type="date" id="appointment-date" class="swal2-input" placeholder="Choose Date" required style="border: 1px solid #007bff; padding: 5px; font-size: 16px;">
      <select  id="service-type" class="swal2-input" style="border: 1px solid #007bff; padding: 5px; font-size: 16px;">
         ${this.services.services.map((service) => `<option  key="${service.id}" value="${service.name}">${service.name}</option>`).join('')}

      </select>
      <button id="book-service" class="swal2-styled" style="background-color: #007bff; color: white; border: none; padding: 5px 10px; border-radius: 3px; font-size: 14px;">
        <i class="fas fa-calendar-check"></i> Book Service
      </button>
    </div>
  `

      Swal.fire({
        title: `Welcome, ${userProfile.name || userProfile.email}!`,
        html: `
      <div style="display: flex; align-items: center; margin-bottom: 10px;">
        <i class="fas fa-user" style="color: #007bff; margin-right: 5px;"></i>
        <strong style="color: #007bff; font-size: 16px;">Name:</strong>
        <span style="font-size: 16px;">${userProfile.name || 'N/A'}</span>
      </div>
      <div style="display: flex; align-items: center; margin-bottom: 10px;">
        <i class="fas fa-envelope" style="color: #007bff; margin-right: 5px;"></i>
        <strong style="color: #007bff; font-size: 16px;">Email:</strong>
        <span style="font-size: 16px;">${userProfile.email}</span>
      </div>
      ${appointmentsHtml}
      ${bookServiceHtml}
    `,
        showConfirmButton: false,
        didRender: () => {
          const bookServiceButton = document.getElementById('book-service')
          const acceptButtons = document.querySelectorAll('.accept-appointment')
          const rejectButtons = document.querySelectorAll('.reject-appointment')
          // const serviceType = document.getElementById('service-type').value
          if (bookServiceButton) {
            bookServiceButton.addEventListener('click', async () => {
              const appointmentDate = document.getElementById('appointment-date').value.trim()
              const serviceType = document.getElementById('service-type').value
              const token = localStorage.getItem('authToken')
              console.log(serviceType)
              console.log(document.getElementById('service-type'))
              const response = await fetch('http://localhost:8000/api/user/reserve', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                  date: appointmentDate,
                  servicename: serviceType
                })
              })

              if (response.ok) {
                Swal.fire({
                  icon: 'success',
                  title: 'Service Booked',
                  text: `Your service has been booked for ${appointmentDate} with ${serviceType}.`
                }).then(() => {
                  userProfile.appointment = { date: appointmentDate, service: serviceType }
                  this.showProfile(userProfile)
                })
              } else {
                console.log(appointmentDate)
                console.log(serviceType)
                console.error('Failed to fetch doctor appointments:', response.statusText)
                console.error('Failed to fetch doctor appointments:', response.text())
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Please select a valid date and service type.'
                })
              }
            })
          }

          acceptButtons.forEach((button) => {
            button.addEventListener('click', async () => {
              const appointmentId = button.dataset.id
              const token = localStorage.getItem('authToken')

              const response = await fetch('http://localhost:8000/api/user/control_appointment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                  id: appointmentId,
                  state: 'accept'
                })
              })

              if (response.ok) {
                Swal.fire({
                  icon: 'success',
                  title: 'Appointment Accepted',
                  text: 'You have accepted the appointment.'
                }).then(() => {
                  delete userProfile.appointment
                  this.showProfile(userProfile)
                })
              } else {
                console.error('Failed to accept the appointment:', response.statusText)
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to accept the appointment.'
                })
              }
            })
          })

          rejectButtons.forEach((button) => {
            button.addEventListener('click', async () => {
              const appointmentId = button.dataset.id
              const token = localStorage.getItem('authToken')

              const response = await fetch('http://localhost:8000/api/user/control_appointment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                  id: appointmentId,
                  state: 'reject'
                })
              })

              if (response.ok) {
                Swal.fire({
                  icon: 'success',
                  title: 'Appointment Rejected',
                  text: 'You have rejected the appointment.'
                }).then(() => {
                  delete userProfile.appointment
                  this.showProfile(userProfile)
                })
              } else {
                console.error('Failed to reject the appointment:', response.statusText)
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Failed to reject the appointment.'
                })
              }
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.line::after {
  content: '';
  position: absolute;
  width: 100px;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  height: 3px;
  background-color: #085f63;
}
@media (max-width: 768px) {
  #header {
    display: none;
  }
  #header ul {
    flex-direction: column;
  }
}
.img_box {
  position: relative;
  margin-top: 20px;
  overflow: hidden;
}
.img_box img {
  height: 300px;
}
.img_box p {
  position: absolute;
  bottom: -500px;
  transition: all;
  transition-duration: 0.6s;
  transition-timing-function: linear;
  background-color: #085e63c4;
  color: white;
  font-size: 16px;
  border: 5px solid #f1345d;
}
.img_box:hover p {
  bottom: 0;

  padding: 75px 0 0;
}
</style>
