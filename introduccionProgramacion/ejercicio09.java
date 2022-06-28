package introduccionProgramacion;

public class ejercicio09 {
    
    Cliente cliente = new Cliente();
    cliente.setEdad(35);
    cliente.setNombre ("Maria");
    cliente.setTelefono(3569854125);
    cliente.setCredito(2514.3);
        
    system.out.println(cliente.getEdad());
    system.out.println(cliente.getNombre());
    system.out.println(cliente.getTelefono());
    system.out.println(cliente.getCredito());
    
    Trabajador trabajador = new Trabajador();
    system.out.println(trabajador.getSalario());
    
    
}

//Crea una clase Persona con las siguientes variables:
//La edad, el nombre y el teléfono
abstract class Persona{
    int edad;
    String nombre;
    int telefono;
    public Persona(){
        System.out.println(edad);
        System.out.println(nombre);
        System.out.println(telefono);
    }

    abstract public void setEdad(int edad);
    abstract public int getEdad();

    abstract public void setNombre(String nombre); 
    abstract public String getNombre();

    abstract public void setTelefono(int telefono);
    abstract public int getTelefono();

}

//Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
//Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

class Cliente extends Persona{    
    public void setEdad(int edad){ this.edad = edad;}
    public int getEdad(){ return this.edad;}

    public void setNombre(String nombre){ this.nombre = nombre;}
    public String getNombre(){ return this.nombre;}

    public void setTelefono(int telefono){ this.telefono = telefono;}
    public int getTelefono(){return this.telefono;}

    double credito;
    public void setCredito(double credito){ this.credito = credito;}
    public double getCredito(){return this.credito;}

    public Cliente(){
        System.out.println("Estoy en el constructor de Cliente");
        System.out.println(edad);
        System.out.println(nombre);
        System.out.println(telefono);
        System.out.println(credito);
    }

}

//Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
class Trabajador extends Persona{
    public void setEdad(int edad){ this.edad = edad;}
    public int getEdad(){ return this.edad;}

    public void setNombre(String nombre){ this.nombre = nombre;}
    public String getNombre(){ return this.nombre;}

    public void setTelefono(int telefono){ this.telefono = telefono;}
    public int getTelefono(){return this.telefono;}

    double salario;
    public void setSalario(double salario){ this.salario = salario;}
    public double getSalario(){return this.salario;}

    public Trabajador(){
        System.out.println("Estoy en el constructor de Trabajador");
    }
}