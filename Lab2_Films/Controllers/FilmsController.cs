using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab2_Films.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController : ControllerBase
    {
        listeDeFilms Meilleurfilm = new listeDeFilms
        {
            Films = new Film[3] {
                new Film
                {
                    Titre = "Les Minions",
                    Auteur = "Brian Lynch",
                    Directeur = "Kyle Balda, Pierre Coffin",
                    Date = 2015,
                    Description = "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world. ",
                    BoxOffice = new BoxOffice
                    {
                        Budget = "74 000 000$",
                        FdsOuverture = "115 718 405$",
                        TotalUSA = "336 045 770$",
                        TotalMonde = "1 159 398 397$"
                    },
                    Vedettes = new Vedette[3] {
                    new Vedette { Nom = "Sandra Bullock", Age="56", Personnage = "Scarlet Overkill (voix)"},
                    new Vedette { Nom = "Jon Hamm", Age="49", Personnage = "Herb Overkill (voix)"},
                    new Vedette { Nom = "Michel Keaton", Age="61", Personnage = "Walter Nelson (voix)"}
                    }
                },
                new Film
                {
                    Titre = "Fight Club",
                    Auteur = "David Fincher",
                    Directeur = "Chuck Palahniuk, Jim Uhls",
                    Date = 1995,
                    Description = "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                    BoxOffice = new BoxOffice
                    {
                        Budget = "63 000 000$",
                        FdsOuverture = "11 035 485$",
                        TotalUSA = "37 030 102$",
                        TotalMonde = "101 218 804$"
                    },
                    Vedettes = new Vedette[3] {
                    new Vedette { Nom = "Brad Pitt", Age="63", Personnage = "Tyler Durden"},
                    new Vedette { Nom = "Edward Norton", Age="51", Personnage = "Narrator"},
                    new Vedette { Nom = "Meat Loaf", Age="73", Personnage = "Robert Paulsen"}
                    }
                },
                new Film
                {
                    Titre = "Ennemy of the state",
                    Auteur = "Tony Scott",
                    Directeur = "David Marconi",
                    Date = 1998,
                    Description = "A lawyer becomes targeted by a corrupt politician and his N.S.A. goons when he accidentally receives key evidence to a politically motivated crime.",
                    BoxOffice = new BoxOffice
                    {
                        Budget = "90 000 000$",
                        FdsOuverture = "20 038 573$",
                        TotalUSA = "111 549 836$",
                        TotalMonde = "250 849 789$"
                    },
                    Vedettes = new Vedette[3] {
                    new Vedette { Nom = "Will Smith", Age="52", Personnage = "Robert Clayton Dean"},
                    new Vedette { Nom = "Gene Hackman", Age="90", Personnage = "Edward Lyle"},
                    new Vedette { Nom = "Jon Voight", Age="82", Personnage = "Thomas Brian Reynolds"}
                    }
                }
            }
        };

        public listeDeFilms MesFilms()
        {
            return Meilleurfilm;
        }
    }
}