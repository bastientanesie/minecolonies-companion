<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <h2>Citizens</h2>
    <p v-show="citizens.length < 1">Start by creating a citizen with the form below.</p>
    <CitizenList :items="citizens" :deleteCitizen="deleteCitizen" v-show="citizens.length > 0" />

    <NewCitizenForm :jobs="jobs" :createCitizen="createCitizen" />
  </div>
</template>

<script>
    import CitizenList from './components/CitizenList.vue';
    import NewCitizenForm from './components/NewCitizenForm.vue';
    import Citizen from './models/Citizen';

    const LOCAL_STORAGE_KEY = "mc-citizen-list";

    const JOBS = {
        "baker": {
            name: "Baker",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "blacksmith": {
            name: "Blacksmith",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "builder": {
            name: "Builder",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "chickenHerder": {
            name: "Chicken Herder",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "composter": {
            name: "Composter",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "cook": {
            name: "Cook",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "cowboy": {
            name: "Cowboy",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "crusher": {
            name: "Crusher",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "deliveryman": {
            name: "Deliveryman",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "enchanter": {
            name: "Enchanter",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "farmer": {
            name: "Farmer",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "fisherman": {
            name: "Fisherman",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "florist": {
            name: "Florist",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "guard": {
            name: "Guard",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "healer": {
            name: "Healer",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "libraryStudent": {
            name: "Library Student",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "lumberjack": {
            name: "Lumberjack",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "miller": {
            name: "Miller",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "miner": {
            name: "Miner",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "ranger": {
            name: "Ranger",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "shepherd": {
            name: "Shepherd",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "Sifter": {
            name: "Sifter",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "smelter": {
            name: "Smelter",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "stonemason": {
            name: "Stonemason",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "stoneSmelter": {
            name: "Stone Smelter",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "swineHerder": {
            name: "Swine Herder",
            skills: {
                primary: null,
                secondary: null
            }
        },
        "universityStudent": {
            name: "University Student",
            skills: {
                primary: null,
                secondary: null
            }
        }
    };

    const storage = {
        uid: 0,
        save: (citizens) => {
            const rawData = citizens.map((item) => item.toJson());
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rawData));
        },
        fetchAll: () => {
            const rawData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
            const citizens = [];
            rawData.forEach((item, index) => {
                item.id = index;
                citizens.push(Citizen.fromJson(item));
            });
            storage.uid = citizens.length;
            return citizens;
        },
    };

    export default {
        name: 'App',
        components: {
            CitizenList,
            NewCitizenForm
        },
        data: () => {
            return {
                citizens: storage.fetchAll(),
                jobs: JOBS
            }
        },
        watch: {
            citizens: {
                handler: (value) => {
                    storage.save(value);
                },
                deep: true
            }
        },
        methods: {
            createCitizen(name, job, skills) {
                const citizen = new Citizen(
                    storage.uid++,
                    name,
                    skills
                );
                if (job && Object.prototype.hasOwnProperty.call(JOBS, job)) {
                  citizen.job = JOBS[job].name;
                }
                this.citizens.push(citizen);
            },
            deleteCitizen(citizen) {
                this.citizens.splice(this.citizens.indexOf(citizen), 1);
            }
        }
    }
</script>

<style>
  #app {
  }
</style>
