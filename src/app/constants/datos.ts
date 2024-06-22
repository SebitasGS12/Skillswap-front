export class Datos {
    private static base:string =  "http://"
    private static web:string = "skillswap-core-production.up.railway.app/"
    private static local:string = "localhost:8080/"
    private static estandar:string = "api/v1/"

    //public static readonly API_URL = this.base+this.web+this.estandar;
    public static readonly API_URL = this.base+this.local+this.estandar;
    

}
