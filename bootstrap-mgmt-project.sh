# node exporter configuration
git clone https://github.com/cloudalchemy/ansible-node-exporter.git
mkdir -p ansible-node-exporter/roles/cloudalchemy.node_exporter
mv ansible-node-exporter/defaults/ ansible-node-exporter/handlers/ ansible-node-exporter/meta/ ansible-node-exporter/molecule/ ansible-node-exporter/tasks/ ansible-node-exporter/templates/ ansible-node-exporter/vars/ ansible-node-exporter/roles/cloudalchemy.node_exporter/

# prometheus configuration
git clone https://github.com/cloudalchemy/ansible-prometheus.git
mkdir -p ansible-prometheus/roles/cloudalchemy.prometheus
mv ansible-prometheus/defaults/ ansible-prometheus/handlers/ ansible-prometheus/meta/ ansible-prometheus/molecule/ ansible-prometheus/tasks/ ansible-prometheus/templates/ ansible-prometheus/vars/ ansible-prometheus/roles/cloudalchemy.prometheus/

# grafana configuration
git clone https://github.com/cloudalchemy/ansible-grafana.git
mkdir -p ansible-grafana/roles/cloudalchemy.grafana
mv ansible-grafana/defaults/ ansible-grafana/handlers/ ansible-grafana/meta/ ansible-grafana/molecule/ ansible-grafana/tasks/ ansible-grafana/templates/ ansible-grafana/vars/ ansible-grafana/roles/cloudalchemy.grafana/

export ANSIBLE_ROLES_PATH=$ANSIBLE_ROLES_PATH:/home/vagrant/ansible-node-exporter/roles:/home/vagrant/ansible-prometheus/roles:/home/vagrant/ansible-grafana/roles