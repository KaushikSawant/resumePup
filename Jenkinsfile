pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/KaushikSawant/resumePup.git'
            }
        }

        stage('Install NVM if Missing') {
            steps {
                sh """
                    export NVM_DIR="\$HOME/.nvm"
                    if [ ! -d "\$NVM_DIR" ]; then
                        echo "NVM not found, installing..."
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    else
                        echo "NVM already installed."
                    fi
                """
            }
        }

        stage('Setup Node via NVM') {
            steps {
                sh """
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"
                    nvm install 18
                    nvm use 18
                """
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
