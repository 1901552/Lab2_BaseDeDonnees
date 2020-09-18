using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Films.Controllers
{
    public class BoxOffice
    {
        public string Budget { get; set; }
        public string FdsOuverture { get; set; }
        public string TotalUSA { get; set; }
        public string TotalMonde { get; set; }
    }

    public class Vedette
    {
        public string Nom { get; set; }
        public string Age { get; set; }
        public string Personnage { get; set; }
    }

    public class Film
    {
        public string Titre { get; set; }
        public string Directeur { get; set; }
        public string Auteur { get; set; }
        public int Date { get; set; }
        public string Description { get; set; }
        public BoxOffice BoxOffice { get; set; }
        public Vedette[] Vedettes { get; set; }
    }

}
