# snack-dept
A Program to track dept for snacks that need to be brought for coming too late to meetings.

# Deploy Aspire to Kubernetes

## Prerequisites
Install [Aspire8](https://prom3theu5.github.io/aspirational-manifests/getting-started.html) as a dotnet tool `dotnet tool install -g aspirate --prerelease`

## Create the Kubernetes Manifests
Run aspir8 in the Host project directory to create the Kubernetes manifests.

- `aspirate init`
- `aspirate generate`

## Deploy to Kubernetes

- `apritate apply`

## Delete from Kubernetes

- `aspirate destroy`

## Troubleshooting
See the [Aspire Documentation](https://learn.microsoft.com/en-us/dotnet/aspire/deployment/overview) for more information.
