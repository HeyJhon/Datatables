        [HttpPost]
        public JsonResult getCustomers(string CLAVE_CLI, string EMPRESA)
        {
           var data = new BLL.Articulo().ListarSQL(user.ClaveADS,CLAVE_CLI, EMPRESA);
           var jsonResult = Json(new { data = data }, JsonRequestBehavior.AllowGet);          

           return jsonResult;               
        }