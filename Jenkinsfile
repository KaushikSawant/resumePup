pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'nodejs', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/KaushikSawant/resumePup.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Linux Server') {
            steps {
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'LinuxServer',
                        transfers: [
                            sshTransfer(
                                sourceFiles: 'build/**',
                                removePrefix: 'build',
                                remoteDirectory: '/var/www/resume',
                                execCommand: 'sudo systemctl reload nginx'
                            )
                        ],
                        usePromotionTimestamp: false
                    )
                ])
            }
        }
    }
}
