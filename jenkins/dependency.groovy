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
                    sh "npm link"
                    sh """
                        {
                            echo "javascripttest\n";
                            echo "A typescript app.\n";
                            echo "Joshua Blevins\n";
                        } | yo nightowl-react
                    """
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
                    sh "npm link"
                    sh """
                        {
                            echo "typescripttest\n";
                            echo "A typescript app.\n";
                            echo "Joshua Blevins\n";
                        } | yo nightowl-react --typescript
                    """
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