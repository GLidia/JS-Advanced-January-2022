function solve(){
    let heroFactory = {

        mage: (mageName) => {

            let mage = {name: mageName, health: 100, mana: 100};
            mage.cast = (spell)=> {
                    mage.mana--;
                    console.log(`${mageName} cast ${spell}`);
                }
            return mage;
        },

        fighter: (fighterName) => {

            let fighter = {name: fighterName, health: 100, stamina: 100};
            fighter.fight = () => {
                    fighter.stamina--;
                    console.log(`${fighterName} slashes at the foe!`);
                }

            return fighter;
        }

    }

return heroFactory;

}
solve()