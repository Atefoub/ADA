# Jeu des Allumettes en Python

# Étape 1 : Fonction pour retirer des allumettes
def retirer_allumettes(nombre, reste):
    """
    Retire un nombre d'allumettes du reste.
    Retourne le nouveau nombre d'allumettes restantes, ou None si invalide.
    """
    if nombre < 1 or nombre > 6:
        print("❌ Erreur : Vous devez retirer entre 1 et 6 allumettes !")
        return None
    if nombre > reste:
        print(f"❌ Erreur : Il ne reste que {reste} allumette(s) !")
        return None
    return reste - nombre


# Étape 2 & 3 : Demander à l'utilisateur avec validation
def demander_nombre_allumettes(reste):
    """
    Demande à l'utilisateur combien d'allumettes il souhaite retirer.
    Valide l'entrée (entre 1 et 6, et pas plus que le reste).
    """
    while True:
        try:
            nombre = int(input(f"Combien d'allumettes voulez-vous retirer ? (1-6, reste: {reste}) : "))
            nouveau_reste = retirer_allumettes(nombre, reste)
            if nouveau_reste is not None:
                return nouveau_reste
        except ValueError:
            print("❌ Veuillez entrer un nombre valide !")


# Étape 3 : Vérifier la victoire
def verifier_victoire(reste):
    """
    Vérifie si la partie est terminée (plus d'allumettes).
    """
    return reste == 0


# Étape 5 : Demander le nombre de joueurs
def demander_nombre_joueurs():
    """
    Demande combien de joueurs participent à la partie.
    """
    while True:
        try:
            nb_joueurs = int(input("Combien de joueurs participent ? (2 ou plus) : "))
            if nb_joueurs >= 2:
                return nb_joueurs
            else:
                print("❌ Il faut au moins 2 joueurs !")
        except ValueError:
            print("❌ Veuillez entrer un nombre valide !")


# Fonction principale du jeu
def jouer():
    """
    Fonction principale qui gère le déroulement de la partie.
    """
    print("=" * 50)
    print("🔥  BIENVENUE AU JEU DES ALLUMETTES  🔥")
    print("=" * 50)
    print("Règles : Retirez entre 1 et 6 allumettes à tour de rôle.")
    print("Le joueur qui retire la dernière allumette gagne !\n")
    
    # Étape 5 : Mode multi-joueurs
    nb_joueurs = demander_nombre_joueurs()
    print(f"\n🎮 Partie à {nb_joueurs} joueurs !\n")
    
    # Initialisation
    allumettes_restantes = 50
    joueur_actuel = 1
    
    # Boucle de jeu (Étape 2)
    while allumettes_restantes > 0:
        print(f"\n{'=' * 50}")
        print(f"🔥 Allumettes restantes : {allumettes_restantes}")
        print(f"{'|' * allumettes_restantes}")
        print(f"👤 Tour du Joueur {joueur_actuel}")
        print(f"{'=' * 50}")
        
        # Le joueur retire des allumettes
        allumettes_restantes = demander_nombre_allumettes(allumettes_restantes)
        
        # Étape 3 : Vérifier la victoire
        if verifier_victoire(allumettes_restantes):
            print(f"\n{'🎉' * 20}")
            print(f"🏆 VICTOIRE ! Le Joueur {joueur_actuel} a gagné ! 🏆")
            print(f"{'🎉' * 20}\n")
            break
        
        # Étape 4 & 5 : Passer au joueur suivant
        joueur_actuel = (joueur_actuel % nb_joueurs) + 1
    
    # Proposer de rejouer
    rejouer = input("\n🔄 Voulez-vous rejouer ? (o/n) : ").lower()
    if rejouer == 'o' or rejouer == 'oui':
        print("\n" * 2)
        jouer()
    else:
        print("\n👋 Merci d'avoir joué ! À bientôt !")


# Lancement du jeu
if __name__ == "__main__":
    jouer()