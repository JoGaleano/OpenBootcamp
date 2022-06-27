package introduccionProgramacion;



public class ejercicio04{
    public static void main(String[] args){
        // Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
        //Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
        int numeroIf = -5 ;
        if(numeroIf == 0){
            System.out.println("Es igual a cero");
        }
        if(numeroIf > 0){
            System.out.println("Es positivo");
        }
        if(numeroIf < 0){
            System.out.println("Es negativo");
        }
        //Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
        //Incrementar el valor de la variable en uno cada vez que se ejecute.
        //Mostrarlo por pantalla cada vez que se ejecute.
        int numeroWhile = 0;
        while(numeroWhile < 3){
            System.out.println("Ciclo While=> " + numeroWhile);
            numeroWhile = numeroWhile + 1;
            
        }
        //Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

        //aqui numeroWhile vale 2
        do{
            System.out.println("Ciclo DoWhile=> " + numeroWhile);
            numeroWhile = numeroWhile + 1;

        }while(numeroWhile<3);

        //Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
        
        for(int numeroFor = 0; numeroFor <= 3; numeroFor ++){
            System.out.println("Ciclo For=> " +numeroFor);
        }

        //Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
        var estacion = "VERANO";

        switch(estacion){
            case "VERANO":
                System.out.println("Es verano");
                break;
            
            case "INVIERNO":
                System.out.println("Es invierno");
                break;
            
            case "OTOÑO":
                System.out.println("Es otoño");
                break;
            
            case "PRIMAVERA":
                System.out.println("Es primavera");
                break;
            
            default:
                System.out.println("No es una esatcion");
                break;
        }

    }
}







