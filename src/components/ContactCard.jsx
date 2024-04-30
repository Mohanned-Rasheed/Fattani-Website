import phoneIcon from "../assets/icons/icons8-phone-100.png";
import mail from "../assets/icons/icons8-mail-100.png";
import location from "../assets/icons/icons8-location-100.png";
import person from "../assets/icons/icons8-person-90.png";
import phoneBlack from "../assets/icons/icons8-phone-100_black.png";
import emailBlack from "../assets/icons/icons8-email-100_Black.png";
import write from "../assets/icons/icons8-write-100.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactCard() {
  const form = useRef();
  var [name, setName] = useState("");
  var [phone, setPhone] = useState("");
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  var [err, setErr] = useState("");
  var [errEmail, setErrEmail] = useState("");
  var [errMessage, setErrMessage] = useState("");
  var [flag, setFlag] = useState(false);

  const emailValidation = () => {
    if (email === "" || email.length === 0 || email === null) {
      setErrEmail("Email Must Not Be Empty");
      return false;
    }
    var regex = /^([a-zA-Z0-9_.+-])+\@([a-zA-Z0-9-])+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(String(email).toLowerCase())) {
      setErrEmail("Make Sure To Write a Vailde Email");
      return false;
    }
    setErrEmail("");
    return true;
  };
  const messageValidation = () => {
    if (message === "" || message.length === 0 || message === null) {
      setErrMessage("Message Must Not Be Empty");
      return false;
    }
    setErrMessage("");
    return true;
  };
  const validation = () => {
    const emailFlag = emailValidation();
    const messageFlag = messageValidation();
    if (emailFlag && messageFlag) {
      setErrEmail("");
      setErrMessage("");
      return true;
    }
  };
  const clearUserData = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  const onSubmitMessage = (e) => {
    e.preventDefault();

    if (validation()) {
      emailjs
        .sendForm("service_u9g2zhb", "template_sr7yand", form.current, {
          publicKey: "pizwJIg5M7OehraTE",
        })
        .then(
          () => {
            alert("Message Sent!");
          },
          (error) => {
            alert("FAILED...", error.text);
          }
        );
      clearUserData();
    }
  };
  return (
    <div>
      <div className="mt-32 py-14 rounded-3xl max-w-6xl mx-6 xl:mx-auto shadow-2xl bg-DarkPurple2 flex flex-col-reverse md:flex-row">
        <section className="md:w-[50%] flex flex-col mt-10">
          <h1 className="text-xl md:text-2xl font-bold  ml-5 md:ml-12 text-white">
            Contact Us
          </h1>
          <div className="border-b-4 border-b-gold w-32 ml-5 md:ml-12 mt-2"></div>
          <div className="space-y-8 md:space-y-16 mt-8 md:mt-12 ml-5 md:ml-12">
            <div className="flex gap-6 text-lg md:text-xl text-white items-center">
              <img className="h-7 md:h-10" src={phoneIcon}></img>
              +966582810217
            </div>
            <div className="flex gap-6 text-lg md:text-xl text-white items-center">
              <img className="h-7 md:h-10" src={mail}></img>
              Fattani@Gmail.com
            </div>
            <div className="flex gap-6 text-lg md:text-xl text-white items-center">
              <img className="h-7 md:h-10" src={location}></img>
              Riyadh
            </div>
          </div>
        </section>

        <section className="md:w-[50%] flex flex-col mr-5 md:mr-10">
          <div className="text-lg ml-5 md:ml-12 text-white">
            <form ref={form} onSubmit={onSubmitMessage}>
              <div className="flex flex-col">
                <div className="flex flex-col gap-6">
                  {" "}
                  <label className="flex flex-col">
                    Name
                    <div className="flex items-center bg-white rounded-md w-full ">
                      <img src={person} className="mr-2 w-10 p-1.5"></img>
                      <input
                        name="user_name"
                        value={name}
                        onChange={(input) => {
                          setName(input.target.value);
                        }}
                        type="text"
                        placeholder="Name"
                        className="text-black rounded-md outline-none h-10 w-full"
                      ></input>
                    </div>
                  </label>
                  <label className="flex flex-col">
                    Phone
                    <div className="flex items-center bg-white rounded-md mr-1">
                      <img src={phoneBlack} className="mr-2 w-10 p-2"></img>
                      <input
                        name="user_phone"
                        onChange={(input) => {
                          setPhone(input.target.value);
                        }}
                        value={phone}
                        placeholder="Phone"
                        className="text-black rounded-md outline-none h-10 w-full"
                      ></input>
                    </div>
                  </label>
                </div>
                <div className="mt-5 w-auto">
                  <label className="flex flex-col">
                    Email
                    <div className="flex items-center bg-white rounded-md mr-1">
                      <img src={emailBlack} className="mr-2 w-10 p-2"></img>
                      <input
                        name="user_email"
                        onChange={(input) => {
                          setEmail(input.target.value);
                          if (input.target.value.length == 0) {
                            setErrEmail("Email Must Not Be Empty");
                          }
                        }}
                        value={email}
                        placeholder="Email"
                        className="text-black rounded-md outline-none h-10 w-full"
                      ></input>
                    </div>
                  </label>
                  <div className="text-red-500 font-bold text-sm">
                    {errEmail}
                  </div>
                </div>
                <div className="mt-5">
                  <label className="flex flex-col mr-1 relative">
                    <img
                      src={write}
                      width={20}
                      className=" absolute top-10 right-2"
                    ></img>
                    Message
                    <textarea
                      name="user_message"
                      onChange={(input) => {
                        setMessage(input.target.value);
                        if (input.target.value.length == 0) {
                          setErrMessage("Message Must Not Be Empty");
                        }
                      }}
                      value={message}
                      rows={4}
                      className="text-black rounded-md mt-1 text-base  pr-3 md:pr-6"
                    ></textarea>
                  </label>
                  <div className="text-red-500 font-bold text-sm">
                    {errMessage}
                  </div>
                </div>

                <input
                  type="submit"
                  className="bg-gold rounded-md mt-4 text-center py-2 mr-1 cursor-pointer"
                ></input>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactCard;
