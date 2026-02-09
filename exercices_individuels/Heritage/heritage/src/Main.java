public class Main {
    public static void main(String[] args) {
        System.out.println("=== EXERCICE HÉRITAGE - VAISSEAUX ===\n");

        // Instanciation de deux Acclamator et un X-wing
        Croiseur acclamator1 = new Croiseur("Acclamator Alpha", 752, 700);
        Croiseur acclamator2 = new Croiseur("Acclamator Beta", 752, 700);
        Intercepteur xWing = new Intercepteur("X-wing Red Five", 12.5, 2);

        // Affichage des caractéristiques
        System.out.println("\n--- Affichage des capacités ---\n");
        afficherCapacites(acclamator1);
        System.out.println();
        afficherCapacites(acclamator2);
        System.out.println();
        afficherCapacites(xWing);

        // Chargement des troupes
        System.out.println("\n--- Chargement des troupes ---\n");
        System.out.println("Tentative de chargement de 600 hommes sur " + acclamator1.getNom() + ":");
        acclamator1.chargerTroupes(600);

        System.out.println("\nTentative de chargement de 200 hommes supplémentaires:");
        acclamator1.chargerTroupes(200);

        // Test du X-wing
        System.out.println("\n--- Test du X-wing ---\n");
        System.out.println("Tir 1:");
        xWing.tirer();

        System.out.println("\nTir 2:");
        xWing.tirer();

        System.out.println("\nTir 3:");
        xWing.tirer();

        System.out.println("\nRechargement:");
        xWing.recharger();

        System.out.println("\nTir après rechargement:");
        xWing.tirer();
    }

    // Fonction qui prend un Vaisseau en paramètre et affiche ses capacités
    public static void afficherCapacites(Vaisseau vaisseau) {
        vaisseau.afficherCaracteristiques();
    }
}