# Terraform google cloud multi tier deployment

# check how configure the provider here:
# https://www.terraform.io/docs/providers/google/index.html
provider "google" {
    # Create/Download your credentials from:
    # Google Console -> "APIs & services -> Credentials"
    # Choose create- > "service account key" -> compute engine service account -> JSON
    credentials = file("project-sim-367015-1ee0d95ee4dc.json")
    project = var.GCP_PROJECT_ID
    region = var.GCP_REGION
}
