using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace project11.Controllers
{
    public class HomeController : Controller
    {

        //private static readonly HttpClient client = new HttpClient();



        MiralDBEntities db = new MiralDBEntities();
        public ActionResult login()
        {
            return View();
        }



        [HttpGet]
        public JsonResult GetData(LOGIN Login)
        {
            var data = db.LOGINs.ToList();
            db.SaveChanges();
            return Json(data, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult CreateA(LOGIN std)
        {
            db.LOGINs.Add(std);
            db.SaveChanges();
            return Json(new { success = true, message = "Insert Data in DataBase successful" });
        }


        [HttpPost]
        public JsonResult LoginA(LOGIN login)
        {
            try
            {
                var Data = db.LOGINs.FirstOrDefault(x => x.USERNAME == login.USERNAME && x.PASSWORD == login.PASSWORD);

                if (Data != null)
                {
                    return Json(new { success = true, message = "Login successful" });
                }
                else
                {
                    return Json(new { success = false, message = "Invalid Username  or password" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }


        }
             //signup another
        public ActionResult Signup()
        {
            ViewBag.Title = "Signup";
            return View();
        }

             [HttpPost]
        public JsonResult signup
            (LOGIN login)
        {
            try
            {
                db.LOGINs.Add(login);
                db.SaveChanges();


                return Json(new { success = true, message = "Signup successful" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }
            public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public JsonResult GetAddressBookData()
        {
            var data = db.ADDRESS_BOOK.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CreateAddressBookEntry(ADDRESS_BOOK addressBook)
        {
            try
            {
                db.ADDRESS_BOOK.Add(addressBook);
                db.SaveChanges();
                return Json(new { success = true, message = "Insert Data in Database successful" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }


        [HttpPost]
        public JsonResult Index(ADDRESS_BOOK Addressbook)
        {

            try
            {
                db.ADDRESS_BOOK.Add(Addressbook);

                db.SaveChanges();


                return Json(new { success = true, message = "Data save successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }

        }
        public ActionResult NewContact()
        {
            return View();
        }

        public ActionResult EditContact(int USER_ID)
        {
            var contact = db.ADDRESS_BOOK.Find(USER_ID);
            if (contact == null)
            {
                return HttpNotFound();
            }

            ViewBag.AllContacts = db.ADDRESS_BOOK.ToList();
            return View(contact);
        }

        public ActionResult QRCode(string username)

        {
            ViewBag.Username = username;
            return View();
        }



    }
}



