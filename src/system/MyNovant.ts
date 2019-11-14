type NovantEnv = { url: string, user: string, pass: string }
const environments: { [key: string]: NovantEnv } = {
    local: {
        url: 'http://localhost:8080',
        user: 'mlugo@pivotal.io',
        pass: 'P3ek@b0o',
    },
    cloud: {
        // url: 'https://my-novant-api-thankful-squirrel.apps.pcfone.io',
        url: 'https://my-novant-api-active-lynx.apps.demo.azure.pcf-arau.pw',
        user: 'patty',
        pass: 'cakes',
    }
}

class MyNovantApi {
    private apiBase: string; 
    private loginUrl: string;
    private doctorsUrl: string;

    private key: string;

    constructor(public environment: NovantEnv) {
        this.apiBase = this.environment.url;
        this.loginUrl = `${this.apiBase}/login`;
        this.doctorsUrl = `${this.apiBase}/doctors`;
    }

    authenticate = async ({ user, pass }: { user: string, pass: string }) => {
        console.log("MyNovant#authenticate");
        let url = `${this.loginUrl}?email=${user}&password=${pass}`;
        console.log("MyNovant#authenticate", { url });
        let form = new FormData();
        form.append("email", user);
        form.append("password", pass);
        let response = await fetch(url, { method: 'POST', })
        console.log("MyNovant#authenticate status=", response.status);
        console.log("MyNovant#authenticate headers=", response.headers);
        if (response.ok) {
            let result = await response.json();
            console.log("MyNovant#authenticate result=", result);
            if (result['authenticated']) {
                this.key = result['apiToken']
                return true;
            } else {
                alert("login failed, please try again")
            }
        }

        return false;
    }

    doctors = async () => {
        let doctors = []
        console.log("MyNovant#doctors")
        let result = await fetch(this.doctorsUrl, {
            credentials: 'omit',
            headers: {
                'Authorization': `Bearer ${this.key}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        console.log("MyNovant#doctors status=", result.status)
        if (result.ok) {
            console.log("MyNovant#doctors result=", result)
            doctors = await result.json();
            console.log("MyNovant#doctors doctors=", doctors)
        }
        return doctors;
    }
}

let MyNovant = new MyNovantApi(environments.local);
export default MyNovant;