LO1.1.1.5:code

public class Superhero { //creating a class
    String name = "Superman"; //creating the list inside a class
    String comic = "DC";
    int date = 1938;

    public static void main(String[] args) { //callign the class and then outputting the results
        Superhero Hero = new Superhero();
        System.out.println(Hero.name + " is from " + Hero.comic + ". His comics were first made in " + Hero.date);
    }
}