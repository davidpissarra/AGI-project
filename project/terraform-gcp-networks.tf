
# Elemets of the cloud such as virtual servers,
# networks, firewall rules are created as resources
# syntax is: resource RESOURCE_TYPE RESOURCE_NAME
# https://www.terraform.io/docs/configuration/resources.html

resource "google_compute_firewall" "frontend_rules" {
  name    = "frontend"
  network = "default"

  # port 80 - frontend
  # port 3000 - grafana
  # port 4000 - haproxy
  # port 9090 - prometheus
  allow {
    protocol = "tcp"
    ports = ["80", "3000", "4000", "9090"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = ["balancer"]
}
