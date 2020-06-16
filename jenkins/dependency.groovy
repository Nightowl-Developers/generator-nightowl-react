pipeline {
    agent any;

    stages {
        stage("Install dependencies") {
            steps {
                nodejs(nodeJSInstallationName: "Yeoman") {
                    sh "npm ci"
                }
            }
        }

        stage("Run Javascript Yeoman Generator") {
            steps {
                nodejs(nodeJSInstallationName: "Yeoman") {
                    sh "yo nightowl-react"
                    sh "npm link"
                }
            }
        }

        stage("Start Javascript App") {
            steps {
                nodejs(nodeJSInstallationName: "Yeoman") {
                    sh "npm run dev"
                }
            }
        }

        stage("Run Typescript Yeoman Generator") {
            steps {
                nodejs(nodeJSInstallationName: "Yeoman") {
                    sh "yo nightowl-react --typescript"
                }
            }
        }

        stage("Start Typescript App") {
            steps {
                nodejs(nodeJSInstallationName: "Yeoman") {
                    sh "npm run dev"
                }
            }
        }
    }
}