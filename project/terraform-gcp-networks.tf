
# Elemets of the cloud such as virtual servers,
# networks, firewall rules are created as resources
# syntax is: resource RESOURCE_TYPE RESOURCE_NAME
# https://www.terraform.io/docs/configuration/resources.html

resource "google_compute_firewall" "frontend_rules" {
  name    = "frontend"
  network = "default"

  allow {
    protocol = "tcp"
    ports = ["80", "4000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = ["balancer"]
}

resource "google_compute_firewall" "prometheus_rules" {
  name    = "prometheus"
  network = "default"

  allow {
    protocol = "tcp"
    ports = ["9090"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = ["prometheus"]
}

resource "google_compute_firewall" "grafana_rules" {
  name    = "grafana"
  network = "default"

  allow {
    protocol = "tcp"
    ports = ["3000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = ["grafana"]
}
