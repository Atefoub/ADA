public class Croiseur extends Vaisseau {
    private int capaciteTransport;
    private int troupesABord;

    public Croiseur(String nom, double taille, int capaciteTransport) {
        super(nom, "Croiseur", taille);
        this.capaciteTransport = capaciteTransport;
        this.troupesABord = 0;
    }

    public void chargerTroupes(int nombreHommes) {
        if (troupesABord + nombreHommes <= capaciteTransport) {
            troupesABord += nombreHommes;
            System.out.println("✓ " + nombreHommes + " hommes chargés. Total à bord: " + troupesABord);
        } else {
            System.out.println("✗ Impossible de charger " + nombreHommes + " hommes.");
            System.out.println("  Capacité restante: " + (capaciteTransport - troupesABord) + " hommes");
        }
    }

    public void dechargerTroupes(int nombreHommes) {
        if (troupesABord >= nombreHommes) {
            troupesABord -= nombreHommes;
            System.out.println("✓ " + nombreHommes + " hommes déchargés. Total restant: " + troupesABord);
        } else {
            System.out.println("✗ Impossible de décharger " + nombreHommes + " hommes. Seulement " + troupesABord + " à bord.");
        }
    }

    @Override
    public void afficherCaracteristiques() {
        super.afficherCaracteristiques();
        System.out.println("Capacité de transport: " + capaciteTransport + " hommes");
        System.out.println("Troupes à bord: " + troupesABord + " hommes");
    }
}