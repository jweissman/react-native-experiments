// import RCTNetworking from 'RCTNetworking';

type NovantEnv = { url: string, user: string, pass: string }
const environments: { [key: string]: NovantEnv } = {
    local: {
        url: 'http://localhost:8080',
        user: 'patty',
        pass: 'cakes',
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
        // return true;
        console.log("MyNovant#authenticate");
        let body = JSON.stringify({ username: user, password: pass });
        let url = this.loginUrl;
        console.log("MyNovant#authenticate", { body, url });
        let form = new FormData();
        form.append("username", user);
        form.append("password", pass);
        let response = await fetch(this.loginUrl, {
            method: 'POST',
            body: form,
            headers: {
            //     'Accept': 'application/json',
            },
        })
        console.log("MyNovant#authenticate status=", response.status);
        console.log("MyNovant#authenticate headers=", response.headers);

        if (response.ok) {
            let theCookie = response.headers.get('Set-Cookie');
            if (theCookie) {
                let cookieValue = theCookie.split(';')[0].split('=')[1]
                console.log("THE COOKIE", { cookieValue })
                this.key = cookieValue;
                return true;
            }
        }

        return false;
    }

    doctors = async () => {
        // RCTNetworking.clearCookies()
        let doctors = []
        console.log("MyNovant#doctors")
        let result = await fetch(this.doctorsUrl, {
            credentials: 'omit',
            headers: {
                'Cookie': `JSESSIONID=${this.key}`,
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

let MyNovant = new MyNovantApi(environments.cloud);
export default MyNovant;