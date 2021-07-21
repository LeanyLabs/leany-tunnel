# leany-tunnel

localtunnel exposes your localhost to the world for easy testing and sharing! No need to mess with DNS or deploy just to have others test out your changes.

## Quickstart

```
npx @leanylabs/leany-tunnel
```

```
TUNNEL_SUBDOMAIN=any-subdomain-i-wish PORT=3000 npx @leanylabs/leany-tunnel
```

## Installation

### Globally

```
npm install -g @leanylabs/leany-tunnel
```

### As a dependency in your project

```
npm install -g @leanylabs/leany-tunnel
```

## CLI usage

When localtunnel is installed either globally or as a dependency in your project, just use the `llt` command to start the tunnel.

```
llt
```

```
TUNNEL_SUBDOMAIN=any-subdomain-i-wish PORT=3000 llt
```
