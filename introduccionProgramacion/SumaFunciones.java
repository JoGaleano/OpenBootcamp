package introduccionProgramacion;

public class SumaFunciones {
    public static int suma(int num1, int num2, int num3){
        //Crear una función con tres parámetros que sean números que se suman entre sí.
        int resultado;
        resultado = num1 + num2 + num3;    
        return resultado;
    }
    
    public static void main (String[] args){
        suma(5,10,2);
        //Crear un objeto miCoche en el main y añadirle una puerta.
        auto miAuto = new auto();
        miAuto.agregarPuerta();
        //Mostrar el número de puertas que tiene el objeto.
        System.out.println(miAuto.puerta);
    }
}

//Crear una clase coche.
class auto{
    //Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
    public int puerta = 0; 
    //Una función que incremente el número de puertas que tiene el coche.
    public void agregarPuerta(){
        this.puerta++;
    }
}

