module.exports = {
    apps: [
        {
            name: "daffodils-convent-school",
            cwd: "/root/daffodils-convent-school",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 7006
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "800M",
            error_file: "/root/.pm2/logs/daffodils-convent-school-error.log",
            out_file: "/root/.pm2/logs/daffodils-convent-school-out.log",
            log_date_format: "DD/MM/YYYY HH:mm:ss"
        }
    ]
};
