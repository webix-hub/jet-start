using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jet_net_core.Controllers
{
    class DataRecord
    {
        public int id;
        public string title;
        public int year;
        public int votes;
        public double rating;
        public int rank;
    }

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        [HttpGet("data")]
        public JsonResult Data()
        {
            var DataList = new List<DataRecord>();
            DataList.Add(new DataRecord { id = 1, title = "The Shawshank Redemption", year = 1994, votes = 678790, rating = 9.2, rank = 1 });
            DataList.Add(new DataRecord { id = 2, title = "The Godfather", year = 1972, votes = 511495, rating = 9.2, rank = 2 });
            DataList.Add(new DataRecord { id = 3, title = "The Godfather: Part II", year = 1974, votes = 319352, rating = 9.0, rank = 3 });
            DataList.Add(new DataRecord { id = 4, title = "The Good, the Bad and the Ugly", year = 1966, votes = 213030, rating = 8.9, rank = 4 });
            DataList.Add(new DataRecord { id = 5, title = "My Fair Lady", year = 1964, votes = 533848, rating = 8.9, rank = 5 });
            DataList.Add(new DataRecord { id = 6, title = "12 Angry Men", year = 1957, votes = 164558, rating = 8.9, rank = 6 });


            return Json(DataList);
        }
    }
}
