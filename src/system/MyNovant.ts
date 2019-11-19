type NovantEnv = { url: string, user: string, pass: string }
const environments: { [key: string]: NovantEnv } = {
    local: {
        url: 'http://localhost:8080',
        user: 'mlugo@pivotal.io',
        pass: 'P3ek@b0o',
    },
    cloud: {
        url: 'https://my-novant-api-active-lynx.apps.demo.azure.pcf-arau.pw',
        user: 'mlugo@pivotal.io',
        pass: 'P3ek@b0o',
    }
}

class MyNovantContext {
    apiBase: string; 
    loginUrl: string;
    logoutUrl: string;
    doctorsUrl: string;
    key: string;

    constructor(public environment: NovantEnv) {
        this.apiBase = this.environment.url;
        this.loginUrl = `${this.apiBase}/login`;
        this.logoutUrl = `${this.apiBase}/bye`;
        this.doctorsUrl = `${this.apiBase}/doctors`;
    }
}

const env = environments.cloud;
const ctx = new MyNovantContext(env);

// const key;

class MyNovantApi {
    
    // static shouldComeIn = () => false

    static authenticate = async ({ user, pass }: { user: string, pass: string }) => {
        console.log("MyNovant#authenticate");
        let url = `${ctx.loginUrl}?email=${user}&password=${pass}`;
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
                ctx.key = result['apiToken']
                return true;
            } else {
                alert("login failed, please try again")
            }
        }

        return false;
    }

    static logout = async () => {
        console.log("MyNovant#logout");
        // we need to call the server at /bye with our jwt
        let url = ctx.logoutUrl;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ctx.key}`, // :D
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        console.log(`MyNovant#logout -- okay? ${response.ok}`)
        return response.ok;
    }

    static doctors = async () => {
        let doctors = []
        console.log("MyNovant#doctors")
        let result = await fetch(ctx.doctorsUrl, {
            credentials: 'omit',
            headers: {
                'Authorization': `Bearer ${ctx.key}`,
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

export default MyNovantApi;
export { env }; 