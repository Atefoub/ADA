public class Vaisseau {
    protected String nom;
    protected String type;
    protected double taille;

    public Vaisseau(String nom, String type, double taille) {
        this.nom = nom;
        this.type = type;
        this.taille = taille;
    }

    public void afficherCaracteristiques() {
        System.out.println("=== Caractéristiques du vaisseau ===");
        System.out.println("Nom: " + nom);
        System.out.println("Type: " + type);
        System.out.println("Taille: " + taille + " mètres");
    }

    // Getters
    public String getNom() {
        return nom;
    }

    public String getType() {
        return type;
    }

    public double getTaille() {
        return taille;
    }
}