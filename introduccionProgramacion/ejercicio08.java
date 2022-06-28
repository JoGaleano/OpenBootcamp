package introduccionProgramacion;

public class ejercico08 {
    public static void main (String[] args){
        Persona persona = new Persona();

        persona.setEdad(35);        
        
        persona.setNombre("Maria");
        String nombre = persona.getNombre();
        

        persona.setTelefono(3554988);
        int telefono = persona.getTelefono();

        System.out.println(persona.getEdad());
        System.out.println(nombre);
        System.out.println(telefono);
    }
    
}
    
    
class Persona{
        private int edad;
        private String nombre;
        private int telefono;
        
        public void setEdad(int edad){ this.edad = edad;}
        public int getEdad(){return this.edad;}
        
        public void setNombre(String nombre){ this.nombre = nombre;}
        public String getNombre(){return this.nombre;}
        
        public void setTelefono(int telefono){ this.telefono = telefono;}
        public int getTelefono(){return this.telefono;}
    }
    