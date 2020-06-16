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
                sh "yo nightowl-react"
            }
        }

        stage("Start Javascript App") {
            steps {
                sh "npm run dev"
            }
        }

        stage("Run Typescript Yeoman Generator") {
            steps {
                sh "yo nightowl-react --typescript"
            }
        }

        stage("Start Typescript App") {
            steps {
                sh "npm run dev"
            }
        }
    }
}