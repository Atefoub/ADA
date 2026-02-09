public class Intercepteur extends Vaisseau {
    private int nombreCanons;
    private boolean[] canonsCharges;

    public Intercepteur(String nom, double taille, int nombreCanons) {
        super(nom, "Intercepteur", taille);
        this.nombreCanons = nombreCanons;
        this.canonsCharges = new boolean[nombreCanons];
        // Au départ, tous les canons sont chargés
        for (int i = 0; i < nombreCanons; i++) {
            canonsCharges[i] = true;
        }
    }

    public void tirer() {
        boolean peutTirer = false;

        for (int i = 0; i < nombreCanons; i++) {
            if (canonsCharges[i]) {
                System.out.println("Tire! (Canon " + (i + 1) + ")");
                canonsCharges[i] = false;
                peutTirer = true;
            }
        }

        if (!peutTirer) {
            System.out.println("✗ Impossible de tirer! Tous les canons sont vides. Rechargez d'abord.");
        }
    }

    public void recharger() {
        System.out.println("Recharge");
        for (int i = 0; i < nombreCanons; i++) {
            canonsCharges[i] = true;
        }
        System.out.println("✓ Tous les canons sont rechargés.");
    }

    @Override
    public void afficherCaracteristiques() {
        super.afficherCaracteristiques();
        System.out.println("Nombre de canons: " + nombreCanons);
        int canonsDisponibles = 0;
        for (boolean charge : canonsCharges) {
            if (charge) canonsDisponibles++;
        }
        System.out.println("Canons chargés: " + canonsDisponibles + "/" + nombreCanons);
    }
}