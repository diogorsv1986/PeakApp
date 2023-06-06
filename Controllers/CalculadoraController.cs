using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace SuaAplicacao.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculadoraController : ControllerBase
    {
        private static readonly List<KeyValuePair<int, string>> lista = new List<KeyValuePair<int, string>>
        {
            new KeyValuePair<int, string>(1, "João"),
            new KeyValuePair<int, string>(2, "Maria"),
            new KeyValuePair<int, string>(3, "Ana")
        };

        [HttpPost("calcular")]
        public ActionResult<dynamic> Calcular(CalculoRequest request)
        {
            var resultado = (request.Valor * request.Parcelas) * 1.05m;
            var formattedResultado = resultado.ToString("C");

            return new { resultado = formattedResultado };
        }

        [HttpGet("consultar/{id}")]
        public ActionResult<dynamic> Consultar(int id)
        {
            var nome = lista.FirstOrDefault(item => item.Key == id).Value;

            return new { nome };
        }
    }

    public class CalculoRequest
    {
        public int Parcelas { get; set; }
        public decimal Valor { get; set; }
    }
}
